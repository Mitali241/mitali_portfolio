"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const ctx = cv.getContext('2d');
        if (!ctx) return;

        let W: number, H: number, pts: any[] = [];
        const clrs = ['#a78bfa', '#f472b6', '#34d399', '#60a5fa', '#ffffff'];

        function resize() {
            if (!cv) return;
            W = cv.width = cv.offsetWidth;
            H = cv.height = cv.offsetHeight;
        }

        resize();
        window.addEventListener('resize', resize);

        const mouse = { x: -999, y: -999 };
        const handleMouseMove = (e: MouseEvent) => {
            const r = cv.getBoundingClientRect();
            mouse.x = e.clientX - r.left;
            mouse.y = e.clientY - r.top;
        };
        document.addEventListener('mousemove', handleMouseMove);

        for (let i = 0; i < 110; i++) pts.push({
            x: Math.random() * 1600, y: Math.random() * 900, z: Math.random() * 900,
            vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, vz: (Math.random() - .5) * 1.5,
            r: Math.random() * 2.2 + .4, c: clrs[Math.floor(Math.random() * clrs.length)], a: Math.random() * .6 + .2
        });

        let animationId: number;
        function draw() {
            if (!ctx || !cv) return;
            ctx.clearRect(0, 0, W, H);
            const fov = 550;
            pts.forEach(p => {
                p.x += p.vx; p.y += p.vy; p.z += p.vz;
                if (p.z > 850) p.z = 0; if (p.z < 0) p.z = 850;
                if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
                const sc = fov / (fov + p.z);
                const px = p.x * sc + (W / 2) * (1 - sc), py = p.y * sc + (H / 2) * (1 - sc);
                const dx = px - mouse.x, dy = py - mouse.y, dist = Math.hypot(dx, dy);
                if (dist < 110) { const f = (110 - dist) / 110 * 0.55; p.vx += dx / dist * f; p.vy += dy / dist * f; }
                p.vx *= .97; p.vy *= .97;
            });
            for (let i = 0; i < pts.length; i++) {
                const a = pts[i], sc = fov / (fov + a.z);
                const ax = a.x * sc + (W / 2) * (1 - sc), ay = a.y * sc + (H / 2) * (1 - sc);
                for (let j = i + 1; j < pts.length; j++) {
                    const b = pts[j], sc2 = fov / (fov + b.z);
                    const bx = b.x * sc2 + (W / 2) * (1 - sc2), by = b.y * sc2 + (H / 2) * (1 - sc2);
                    const d = Math.hypot(ax - bx, ay - by);
                    if (d < 110) {
                        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
                        ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - d / 110) * .25})`;
                        ctx.lineWidth = .5; ctx.stroke();
                    }
                }
                ctx.beginPath(); ctx.arc(ax, ay, a.r * sc, 0, Math.PI * 2);
                ctx.fillStyle = a.c; ctx.globalAlpha = a.a * sc; ctx.fill(); ctx.globalAlpha = 1;
            }
            animationId = requestAnimationFrame(draw);
        }
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <section id="hero" className={styles.hero}>
            <canvas ref={canvasRef} className={styles.canvas}></canvas>
            <div className={styles.gridBg}></div>
            <div className={`${styles.blob} ${styles.b1}`}></div>
            <div className={`${styles.blob} ${styles.b2}`}></div>
            <div className={`${styles.blob} ${styles.b3}`}></div>
            <div className={styles.heroInner}>
                <div className={styles.heroTag}>Open to full-time &amp; freelance opportunities</div>
                <h1 className={styles.heroH1}>Hi, I'm <span className={styles.g}>Mitali Gadge</span></h1>
                <div className={styles.heroSub}>Full Stack Developer</div>
                <p className={styles.heroP}>
                    I build production-grade web applications with <strong style={{ color: 'var(--a1)' }}>React, Next.js &amp; Spring Boot</strong>.
                    From pixel-perfect UIs to scalable backends — I love shipping things that actually work beautifully.
                </p>
                <div className={styles.heroCtas}>
                    <a className={styles.btnP} href="/resume.pdf" target="_blank" rel="noopener noreferrer">View My Resume →</a>
                    <a className={styles.btnS} href="#contact">Let's Connect ✉</a>
                </div>
                <div className={styles.heroBadges}>
                    <span className={styles.badge}>📍 Mumbai, Maharashtra</span>
                    <span className={styles.badge}>🎓 BE Computer • CGPA 8.72</span>
                    <span className={styles.badge}>⚡ 1+ Year at TETPL</span>
                    <span className={styles.badge}>React | Node.js | Java</span>
                </div>
            </div>
            <div className={styles.heroScroll}>
                <div className={styles.scrollArr}></div>
                scroll
            </div>
        </section>
    );
};

export default Hero;
