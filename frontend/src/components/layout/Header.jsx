function Header() {
    return (
        <header style={{ padding: '24px', borderBottom: '1px solid #eee' }}>
            <nav style={{ display: 'flex', gap: '20px' }}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#certifications">Certifications</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
