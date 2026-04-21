export const SKILLS = [
    { cat: 'frontend', icon: '⚛️', name: 'React & Next.js', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5'], pct: 90, bg: 'rgba(97,218,251,.12)' },
    { cat: 'frontend', icon: '🎨', name: 'UI & Styling', items: ['Tailwind CSS', 'ShadCN', 'Aceternity UI', 'Responsive Design'], pct: 88, bg: 'rgba(167,139,250,.12)' },
    { cat: 'backend', icon: '☕', name: 'Java & Spring', items: ['Java', 'Spring Boot', 'Hibernate', 'JDBC', 'OOP', 'DSA'], pct: 84, bg: 'rgba(244,114,182,.12)' },
    { cat: 'backend', icon: '🟢', name: 'Node.js & APIs', items: ['Node.js', 'RESTful APIs', 'WebSockets', 'Express'], pct: 80, bg: 'rgba(52,211,153,.1)' },
    { cat: 'database', icon: '🗄️', name: 'Databases', items: ['MySQL', 'MongoDB'], pct: 80, bg: 'rgba(96,165,250,.1)' },
    { cat: 'tools', icon: '🛠️', name: 'Dev Tools & Deploy', items: ['Git', 'GitHub', 'Maven', 'Postman', 'Docker', 'Plesk', 'FTP', 'CI/CD'], pct: 75, bg: 'rgba(251,191,36,.08)' },
    { cat: 'backend', icon: '🐍', name: 'Python & Django', items: ['Python', 'Django', 'Models', 'Views', 'Forms'], pct: 60, bg: 'rgba(76,175,80,.1)' },
    { cat: 'tools', icon: '📐', name: 'Java Desktop', items: ['Java Swing', 'JavaFX', 'PDF Export', 'Desktop Apps'], pct: 72, bg: 'rgba(244,114,182,.1)' },
];

export const PROJECTS = [
    {
        emoji: '💼', bg: 'linear-gradient(135deg,#0a1a1a,#1a3a3a)',
        name: 'Advanced Recruitment & Job Portal',
        desc: 'Architected a comprehensive full-stack recruitment platform with automated PDF resume parsing and field-specific data extraction. Developed using Next.js for the dynamic frontend and Node.js/Express for the backend. Implemented secure job seeker authentication, detailed profile orchestration, and a streamlined application workflow, utilizing MongoDB for scalable metadata storage.',
        tags: ['Next.js', 'Express', 'Node.js', 'MongoDB', 'PDF Parsing', 'Auth'],
        img: '/projects/job_portal.png',
        filter: 'fullstack', status: 'Completed', type: 'Professional'
    },
    {
        emoji: '📣', bg: 'linear-gradient(135deg,#0f0520,#2a0a4a)',
        name: 'Digital Marketing Agency Platform',
        desc: 'Built responsive & SEO-friendly frontend with Next.js optimized routing. Designed scalable UI components with TailwindCSS, ShadCN & Aceternity UI. Achieved high Lighthouse performance scores. Integrated frontend Stripe checkout flows with backend coordination.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'ShadCN', 'Aceternity UI', 'Stripe'],
        img: '/projects/image.png',
        filter: 'frontend', status: 'Live', type: 'Professional'
    },
    {
        emoji: '🧾', bg: 'linear-gradient(135deg,#0a1a0f,#0a2e18)',
        name: 'Invoice Generation System',
        desc: 'Desktop app for GST-compliant invoices with customer & product management. Custom invoice layouts with auto GST, subtotal & grand total calculations. PDF export & print functionality for invoices. Java Swing UI integrated with MySQL via JDBC & Hibernate.',
        tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Java Swing', 'JDBC'],
        img: '/projects/invoice.png',
        filter: 'backend', status: 'Completed', type: 'Desktop App'
    },
    {
        emoji: '📋', bg: 'linear-gradient(135deg,#0a0f1a,#0a1a35)',
        name: 'UFF — Job Register System',
        desc: 'Rebuilt existing app with modern JavaFX interface for improved usability. Added PDF export for job records, reducing manual reporting effort. Fixed Hibernate session & transaction handling for stable DB operations. Layered architecture for clean separation of concerns.',
        tags: ['Java', 'Spring Boot', 'Hibernate', 'JavaFX', 'MySQL'],
        img: '/projects/job-register.png',
        filter: 'backend', status: 'Completed', type: 'Desktop App'
    },
    {
        emoji: '🛍️', bg: 'linear-gradient(135deg,#1a0a0f,#350a1a)',
        name: 'E-Commerce Website — Wrapper Shop',
        desc: 'Full-stack e-commerce with dynamic catalog, filtering & size-based pricing. Integrated online payment gateway & order status tracking. Automated order confirmation emails via PHPMailer. Responsive UI with Tailwind CSS & optimized MySQL schemas.',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Tailwind CSS', 'PHPMailer'],
        img: '/projects/wrapper-shop.png',
        filter: 'fullstack', status: 'Live', type: 'Freelance'
    },

];

export const EXPERIENCE = [
    {
        date: 'May 2024 – Present', type: 'Full-Time',
        role: 'Full Stack Developer',
        company: 'Technoriya eTechnologies Pvt Ltd.',
        loc: 'CBD Belapur, Navi Mumbai',
        desc: 'Develop and maintain production-grade web applications using React, Next.js, and TypeScript. Build reusable UI components and implement responsive layouts. Integrate REST APIs and manage production deployments and releases using Plesk.',
        pills: ['React', 'Next.js', 'TypeScript', 'REST APIs', 'Plesk', 'Production Deploy']
    },
    {
        date: 'Nov 2023 – Apr 2024', type: 'Full-Time',
        role: 'Jr. Web Developer',
        company: 'TCR Innovation',
        loc: 'Panvel, Navi Mumbai',
        desc: 'Received hands-on training in Python and Django fundamentals. Worked on Django projects involving models, views, templates & form handling. Gained exposure to URL routing, validation, and database interaction.',
        pills: ['Python', 'Django', 'Models', 'Views', 'Forms', 'Backend']
    },
    {
        date: 'Aug 2023 – Oct 2023', type: 'Internship',
        role: 'Web Development Intern',
        company: 'Spark Foundation',
        loc: 'Singapore (Remote)',
        desc: 'Developed responsive web pages using HTML, CSS, JavaScript & PHP. Implemented client-side form validation and basic backend connectivity. Strengthened core web development concepts through guided tasks.',
        pills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Form Validation', 'Remote']
    },
];
