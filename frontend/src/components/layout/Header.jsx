import './header.css';

function Header() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="logo">Portfolio</div>

            <nav className="nav">
                <a className="active" onClick={() => scrollToSection('home')}>Home</a>
                <a onClick={() => scrollToSection('about')}>About Me</a>
                <a onClick={() => scrollToSection('skills')}>Skills</a>
                <a onClick={() => scrollToSection('projects')}>Projects</a>
                <a onClick={() => scrollToSection('certifications')}>Certifications</a>
                <a onClick={() => scrollToSection('service')}>Service</a>
                <a onClick={() => scrollToSection('contact')}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
