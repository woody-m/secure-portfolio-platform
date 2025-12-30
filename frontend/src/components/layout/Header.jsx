import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Portfolio</div>

            <nav className="nav">
                <a className="active">Home</a>
                <a>About Me</a>
                <a>Resume</a>
                <a>Services</a>
                <a>Portfolio</a>
                <a>Contact</a>
            </nav>

            <button className="connect-btn">CONNECT</button>
        </header>
    );
}

export default Header;
