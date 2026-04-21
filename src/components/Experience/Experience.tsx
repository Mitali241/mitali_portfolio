import React from 'react';
import styles from './Experience.module.css';
import Reveal from '../Reveal/Reveal';
import { EXPERIENCE } from '@/data/portfolio';

const Experience: React.FC = () => {
    return (
        <section id="experience" className={styles.experience}>
            <Reveal>
                <div className="sec-eyebrow">Career</div>
                <h2 className="sec-h2">Work <span className="g">Experience</span></h2>
                <div className="sec-line"></div>
            </Reveal>

            <div className={styles.expGrid}>
                {EXPERIENCE.map((e, i) => (
                    <Reveal key={i} delay={`${i + 1}`} className={styles.expItem}>
                        <div className={styles.expLeft}>
                            <div className={styles.expDate}>{e.date}</div>
                            <div className={styles.expType}>{e.type}</div>
                        </div>
                        <div className={styles.expDotWrap}><div className={styles.expDot}></div></div>
                        <div className={styles.expRight}>
                            <div className={styles.expRole}>{e.role}</div>
                            <div className={styles.expCompany}>{e.company}</div>
                            <div className={styles.expLoc}>📍 {e.loc}</div>
                            <div dangerouslySetInnerHTML={{ __html: e.desc }}></div>
                            <div className={styles.expPills}>
                                {e.pills.map(p => <span key={p} className={styles.expPill}>{p}</span>)}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Experience;
