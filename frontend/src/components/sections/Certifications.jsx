import { useRef } from 'react';
import './certifications.css';

const certifications = [
    {
        title: 'Donislour Certification',
        org: 'Issuing Organization',
        date: 'Jan 2024',
    },
    {
        title: 'Business Certification List',
        org: 'United State of Sciences',
        date: 'Jan 2023',
    },
    {
        title: 'Advanced Core Certification',
        org: 'Issuing Organization',
        date: 'Jan 2024',
    },
    {
        title: 'React Certification',
        org: 'Issuing Organization',
        date: 'Jan 2024',
    },
    {
        title: 'Security Fundamentals',
        org: 'Issuing Organization',
        date: 'Dec 2023',
    },
];

function Certifications() {
    const trackRef = useRef(null);

    const scroll = (dir) => {
        if (!trackRef.current) return;
        const amount = dir === 'left' ? -320 : 320;
        trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    };

    return (
        <section className="certifications" id="certifications">
            <div className="certifications-header">
                <div>
                    <h2>Certifications</h2>
                    <p>Certifications intro comment and semiotade.</p>
                </div>

                <div className="cert-nav">
                    <button onClick={() => scroll('left')}>‹</button>
                    <button onClick={() => scroll('right')}>›</button>
                </div>
            </div>

            <div className="cert-track" ref={trackRef}>
                {certifications.map((c, i) => (
                    <div className="cert-card" key={i}>
                        <div className="cert-icon">🎓</div>
                        <h3>{c.title}</h3>
                        <span className="cert-org">{c.org}</span>
                        <span className="cert-date">{c.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;
