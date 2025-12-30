import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <span>© 2025</span>
                    <strong> Bruna Woodymila</strong>
                </div>

                <nav className="footer-nav">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms & Conditions</a>
                </nav>

                <div className="footer-social">
                    <a aria-label="LinkedIn">in</a>
                    <a aria-label="GitHub">gh</a>
                    <a aria-label="Twitter">x</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
