"use client";

import React, { useState, useEffect } from 'react';
import styles from './Structure.module.css';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

interface StructureProps {
  children: React.ReactNode;
}

const Structure: React.FC<StructureProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <div className={styles.container}>
      {/* Custom Cursor */}
      <div className={styles.cursorDot} id="cd"></div>
      <div className={styles.cursorRing} id="cr"></div>

      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>
          <span>Mitali</span>.Gadge
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <div className={styles.navRight}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          />
          <Link href="mailto:gadgemitali2001@gmail.com" className={styles.resumeLink}>
            <Mail size={16} /> Hire Me
          </Link>
        </div>
      </nav>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.fLogo}><span>Mitali</span>.Gadge</div>
        <div className={styles.fText}>© 2026 Mitali Gadge • Mumbai, India • Built with ♥</div>
        <div className={styles.fSocials}>
          <Link href="https://github.com/mitali-gadge" target="_blank" className={styles.fSoc} aria-label="GitHub"><Github size={20} /></Link>
          <Link href="https://linkedin.com/in/mitali-gadge" target="_blank" className={styles.fSoc} aria-label="LinkedIn"><Linkedin size={20} /></Link>
          <Link href="mailto:gadgemitali2001@gmail.com" className={styles.fSoc} aria-label="Email"><Mail size={20} /></Link>
        </div>
      </footer>

      {/* Script for cursor animation */}
      <script dangerouslySetInnerHTML={{
        __html: `
        const cd=document.getElementById('cd'),cr=document.getElementById('cr');
        let mx=0,my=0,rx=0,ry=0;
        document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;if(cd){cd.style.left=mx+'px';cd.style.top=my+'px';}});
        function ac(){rx+=(mx-rx)*.11;ry+=(my-ry)*.11;if(cr){cr.style.left=rx+'px';cr.style.top=ry+'px';}requestAnimationFrame(ac);};
        ac();
      `}} />
    </div>
  );
};

export default Structure;
