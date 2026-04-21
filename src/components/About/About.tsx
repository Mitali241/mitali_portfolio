import React from 'react';
import styles from './About.module.css';
import Reveal from '../Reveal/Reveal';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutGrid}>
                <Reveal>
                    <div className={styles.aboutCard}>
                        <div className={styles.aboutCardInner}>
                            <div className={styles.avatarRing}>
                                <div className={styles.avatarInner}>
                                    <Image
                                        src="/profile.png"
                                        alt="Mitali Gadge"
                                        width={100}
                                        height={100}
                                        className={styles.avatarImg}
                                    />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className={styles.aboutName}>Mitali Gadge</div>
                                <div className={styles.aboutRole} style={{ margin: '.35rem 0' }}>Full Stack Developer</div>
                                <div className={styles.aboutLoc}>📍 Mumbai, Maharashtra</div>
                            </div>
                            <div className={styles.aboutStatsRow}>
                                <div className={styles.astat}><div className={styles.astatN}>4+</div><div className={styles.astatL}>Projects Shipped</div></div>
                                <div className={styles.astat}><div className={styles.astatN}>8.72</div><div className={styles.astatL}>CGPA</div></div>
                                <div className={styles.astat}><div className={styles.astatN}>1yr+</div><div className={styles.astatL}>Industry Exp.</div></div>
                                <div className={styles.astat}><div className={styles.astatN}>Java | React | Node.js</div><div className={styles.astatL}>Tech Stacks</div></div>
                            </div>
                            <div className={styles.aboutLinks}>
                                <Link className={styles.aboutLink} href="https://github.com/mitali-gadge" target="_blank"><Github size={16} /> GitHub</Link>
                                <Link className={styles.aboutLink} href="https://linkedin.com/in/mitali-gadge" target="_blank"><Linkedin size={16} /> LinkedIn</Link>
                                <Link className={styles.aboutLink} href="mailto:gadgemitali2001@gmail.com"><Mail size={16} /> Email</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eduCard} style={{ marginTop: '1.25rem' }}>
                        <div className={styles.eduIcon}>🎓</div>
                        <div>
                            <div className={styles.eduName}>Bachelor of Engineering — Computer</div>
                            <div className={styles.eduDetail}>University of Pune &nbsp;•&nbsp; Aug 2019 – May 2023 &nbsp;•&nbsp; Pune, India</div>
                            <div className={styles.eduBadge}>CGPA: 8.72</div>
                        </div>
                    </div>
                </Reveal>
                <div className={styles.aboutText}>
                    <Reveal delay="2">
                        <div className="sec-eyebrow">About Me</div>
                        <h2 className="sec-h2">I Turn Ideas Into <span className="g">Scalable Products</span></h2>
                        <div className="sec-line"></div>
                        <p>Hey! I'm <strong>Mitali Gadge</strong> — a Full Stack Developer from <strong>Mumbai</strong> with a passion for building web applications that are both technically solid and visually sharp.</p>
                        <p>Currently working at <strong>Technoriya eTechnologies</strong>, I build and maintain production-grade apps using <strong>React, Next.js, and TypeScript</strong>. I've shipped reusable component libraries, integrated REST APIs, and managed live production deployments using Plesk.</p>
                        <p>On the backend, I'm equally comfortable with <strong>Spring Boot, Hibernate, and Java</strong> — I've built a full invoice generation desktop system and a job register application from the ground up.</p>
                        <p>I care deeply about <strong>clean code, performance, and great user experiences</strong>. I love working at the intersection of design and engineering, where a well-architected backend meets a polished UI.</p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
