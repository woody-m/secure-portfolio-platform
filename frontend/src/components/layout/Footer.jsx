import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-icons">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/brunawslopes"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="footer-icon"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.62-1.17 2.14-2.4 4.41-2.4 4.71 0 5.58 3.1 5.58 7.13V24h-5v-7.98c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.05 2.07-3.05 4.21V24h-5V8z"/>
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/woody-m"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="footer-icon"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.38s1.96.13 2.88.38c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.66.79.55C20.71 21.41 24 17.09 24 12 24 5.73 18.77.5 12 .5z"/>
                        </svg>
                    </a>
                </div>

                <p className="footer-copy">
                    © 2025 Bruna Woodymila Siqueira Lopes — Software Engineer
                </p>
            </div>
        </footer>
    );
}

export default Footer;
