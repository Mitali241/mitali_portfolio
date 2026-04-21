"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import Reveal from '../Reveal/Reveal';
import { PROJECTS } from '@/data/portfolio';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('all');
    const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.filter === filter);

    return (
        <section id="projects" className={styles.projects}>
            <Reveal>
                <div className="sec-eyebrow">Work</div>
                <h2 className="sec-h2">Featured <span className="g">Projects</span></h2>
                <div className="sec-line"></div>
            </Reveal>

            <Reveal delay="1">
                <div className={styles.projFilter}>
                    {['all', 'fullstack', 'frontend', 'backend'].map(f => (
                        <button
                            key={f}
                            className={`${styles.pfBtn} ${filter === f ? styles.active : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f.charAt(0) ? f.charAt(0).toUpperCase() + f.slice(1) : f}
                        </button>
                    ))}
                </div>
            </Reveal>

            <div className={styles.projGrid}>
                {filteredProjects.map((p, i) => (
                    <Reveal key={p.name} delay={`${(i % 4) + 1}`} className={styles.projCard}>
                        <div className={styles.projThumb}>
                            {p.img ? (
                                <Image
                                    src={p.img}
                                    alt={p.name}
                                    className={styles.projImg}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={i < 2}
                                />
                            ) : (
                                <div className={styles.projThumbBg} style={{ background: p.bg }}>{p.emoji}</div>
                            )}
                            <div className={styles.projOverlay}></div>
                            <div className={styles.projActions}>
                                <span className={styles.projAction} title="View Project">↗</span>
                                <span className={styles.projAction} title="Source Code">⟨/⟩</span>
                            </div>
                        </div>
                        <div className={styles.projBody}>
                            <div className={styles.projTags}>
                                {p.tags.map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                            </div>
                            <div className={styles.projName}>{p.name}</div>
                            <div className={styles.projDesc} dangerouslySetInnerHTML={{ __html: p.desc }}></div>
                        </div>
                        <div className={styles.projFoot}>
                            <span className={styles.projStatus}>{p.status}</span>
                            <span className={styles.projType}>{p.type}</span>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Script for 3D Tilt */}
            <script dangerouslySetInnerHTML={{
                __html: `
        document.addEventListener('mousemove', e => {
          document.querySelectorAll('.projCard').forEach(c => {
            const r = c.getBoundingClientRect();
            if (e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom) {
              const dx = (e.clientX - r.left - r.width / 2) / r.width * 14;
              const dy = (e.clientY - r.top - r.height / 2) / r.height * 14;
              c.style.transform = \`translateY(-8px) rotateX(\${-dy}deg) rotateY(\${dx}deg)\`;
            }
          });
        });
        document.addEventListener('mouseleave', () => {
          document.querySelectorAll('.projCard').forEach(c => c.style.transform = '');
        });
      `}} />
        </section>
    );
};

export default Projects;
