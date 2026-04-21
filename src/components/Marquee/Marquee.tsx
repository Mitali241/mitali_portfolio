import React from 'react';
import styles from './Marquee.module.css';

const Marquee: React.FC = () => {
    const items = [
        'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Spring Boot',
        'Hibernate', 'Java', 'MySQL', 'MongoDB', 'Tailwind CSS',
        'ShadCN', 'Docker', 'RESTful APIs', 'WebSockets'
    ];

    return (
        <div className={styles.mqWrap}>
            <div className={styles.mqTrack}>
                {[...items, ...items].map((item, i) => (
                    <span key={i} className={styles.mqItem}>
                        {item}<span className={styles.mqSep}>✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
