"use client";

import React, { useState } from 'react';
import styles from './Contact.module.css';
import Reveal from '../Reveal/Reveal';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/ajax/mitaligadge24@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 3200);
            } else {
                setStatus('idle');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('idle');
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="contact" className={styles.contact}>
            <Reveal>
                <div className="sec-eyebrow">Get In Touch</div>
                <h2 className="sec-h2">Let's <span className="g">Build Together</span></h2>
                <div className="sec-line"></div>
            </Reveal>

            <div className={styles.contactGrid}>
                <Reveal>
                    <div className={styles.contactInfoText}>
                        <h3>Open to Opportunities 🚀</h3>
                        <p>Whether it's a product idea, full-time role, freelance project, or just a chat about tech — I'm always happy to connect. I'll get back within 24 hours!</p>
                    </div>
                    <div className={styles.contactChips}>
                        <a className={styles.chip} href="mailto:gadgemitali2001@gmail.com">
                            <div className={styles.chipIcon} style={{ background: 'rgba(167,139,250,.12)' }}><Mail size={18} className="g" /></div>
                            <div><div className={styles.chipLabel}>Email</div><div className={styles.chipVal}>mitaligadge24@gmail.com</div></div>
                        </a>
                        <a className={styles.chip} href="tel:+918928006070">
                            <div className={styles.chipIcon} style={{ background: 'rgba(52,211,153,.1)' }}><Phone size={18} style={{ color: '#34d399' }} /></div>
                            <div><div className={styles.chipLabel}>Phone</div><div className={styles.chipVal}>+91 89280 06070</div></div>
                        </a>
                        <a className={styles.chip} href="https://linkedin.com/in/mitaligadge" target="_blank" rel="noopener noreferrer">
                            <div className={styles.chipIcon} style={{ background: 'rgba(96,165,250,.1)' }}><Linkedin size={18} style={{ color: '#60a5fa' }} /></div>
                            <div><div className={styles.chipLabel}>LinkedIn</div><div className={styles.chipVal}>linkedin.com/in/mitali-gadge</div></div>
                        </a>
                        <a className={styles.chip} href="https://github.com/Mitali241" target="_blank" rel="noopener noreferrer">
                            <div className={styles.chipIcon} style={{ background: 'rgba(244,114,182,.1)' }}><Github size={18} style={{ color: '#f472b6' }} /></div>
                            <div><div className={styles.chipLabel}>GitHub</div><div className={styles.chipVal}>https://github.com/Mitali241</div></div>
                        </a>
                    </div>
                </Reveal>

                <Reveal delay="2">
                    <form className={styles.cform} onSubmit={handleSubmit}>
                        <div className={styles.formRow2}>
                            <div><label className={styles.flabel}>Name</label><input name="name" className={styles.finput} type="text" placeholder="Your name" required /></div>
                            <div><label className={styles.flabel}>Email</label><input name="email" className={styles.finput} type="email" placeholder="your@email.com" required /></div>
                        </div>
                        <div><label className={styles.flabel}>Subject</label><input name="_subject" className={styles.finput} type="text" placeholder="e.g. Freelance Project Inquiry" /></div>
                        <div><label className={styles.flabel}>Message</label><textarea name="message" className={styles.ftextarea} placeholder="Tell me about your project or opportunity..." required></textarea></div>
                        <button type="submit" className={`${styles.csend} ${status === 'success' ? styles.ok : ''}`} disabled={status === 'sending'}>
                            <span>{status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! 🎉' : 'Send Message'}</span> <span>→</span>
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
