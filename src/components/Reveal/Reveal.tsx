"use client";

import React, { useEffect, useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    delay?: string;
    className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        // Check for bars
                        const bars = entry.target.querySelectorAll('[data-progress]');
                        bars.forEach((bar: any) => {
                            setTimeout(() => {
                                bar.style.width = bar.dataset.progress + '%';
                            }, 250);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const delayClass = delay ? `d${delay}` : '';

    return (
        <div ref={ref} className={`reveal ${delayClass} ${className}`}>
            {children}
        </div>
    );
};

export default Reveal;
