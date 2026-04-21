"use client";

import React, { useState, useEffect } from 'react';
import styles from './Skills.module.css';
import Reveal from '../Reveal/Reveal';
import { SKILLS } from '@/data/portfolio';

const Skills: React.FC = () => {
    const [activeCat, setActiveCat] = useState('all');

    const filteredSkills = SKILLS.filter(s => activeCat === 'all' || s.cat === activeCat);

    return (
        <section id="skills" className={styles.skills}>
            <Reveal>
                <div className="sec-eyebrow">Tech Stack</div>
                <h2 className="sec-h2">Skills &amp; <span className="g">Technologies</span></h2>
                <div className="sec-line"></div>
            </Reveal>

            <Reveal delay="1">
                <div className={styles.skillsTabs}>
                    {['all', 'frontend', 'backend', 'database', 'tools'].map(cat => (
                        <button
                            key={cat}
                            className={`${styles.stab} ${activeCat === cat ? styles.active : ''}`}
                            onClick={() => setActiveCat(cat)}
                        >
                            {cat.charAt(0) ? cat.charAt(0).toUpperCase() + cat.slice(1) : cat}
                        </button>
                    ))}
                </div>
            </Reveal>

            <div className={styles.skillsGrid}>
                {filteredSkills.map((s, i) => (
                    <Reveal key={s.name} delay={`${(i % 5) + 1}`} className={styles.skillCard}>
                        <div className={styles.skTop}>
                            <div className={styles.skIcon} style={{ background: s.bg }}>{s.icon}</div>
                            <div className={styles.skName}>{s.name}</div>
                        </div>
                        <div className={styles.skItems}>
                            {s.items.map(x => <span key={x} className={styles.skItem}>{x}</span>)}
                        </div>
                        <div className={styles.skBarWrap}>
                            <div className={styles.skBar} data-progress={s.pct} style={{ width: '0' }}></div>
                        </div>
                        <div className={styles.skFoot}>
                            <span className={styles.skLabel}>Proficiency</span>
                            <span className={styles.skPct}>{s.pct}%</span>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Script for mouse glow effect */}
            <script dangerouslySetInnerHTML={{
                __html: `
        document.addEventListener('mousemove',e=>{
          document.querySelectorAll('.skillCard').forEach(c=>{
            const r=c.getBoundingClientRect();
            c.style.setProperty('--mx',(e.clientX-r.left)+'px');
            c.style.setProperty('--my',(e.clientY-r.top)+'px');
          });
        });
      `}} />
        </section>
    );
};

export default Skills;
