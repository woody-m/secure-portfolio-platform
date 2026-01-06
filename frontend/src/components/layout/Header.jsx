import { useEffect, useState } from 'react';
import './header.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (id === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo" onClick={() => scrollToSection('home')}>
                Portfolio
            </div>

            <nav className="nav">
                <a onClick={() => scrollToSection('home')}>Home</a>
                <a onClick={() => scrollToSection('about')}>About Me</a>
                <a onClick={() => scrollToSection('projects')}>Projects</a>
                <a onClick={() => scrollToSection('skills')}>Skills</a>
                <a onClick={() => scrollToSection('certifications')}>Certifications</a>
                <a onClick={() => scrollToSection('service')}>Service</a>
                <a onClick={() => scrollToSection('contact')}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
