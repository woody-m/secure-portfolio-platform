import './hero.css';
import brunaImage from '../../assets/images/bruna.png';
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <b><div>
                    <p className="hello">Hello 👋, I am</p>
                </div></b>


                <h1>
                    Bruna  Lopes<br /><span></span>
                </h1>

                <p className="description">
                    Software Engineer specialized in architecture, security, and scalable digital solutions.
                    I design and develop robust systems that turn complex requirements into reliable products.
                    My work is driven by strong engineering principles, clean architecture, and security by design  creating solutions that scale, remain maintainable, and deliver real business value.
                </p>
                <a
                    href="/CV/Bruna-Lopes-Software-Engineer.pdf"
                    download
                    className="cv-btn"
                >
                    Download CV
                </a>

                <div className="socials">
                    <a
                        href="https://www.linkedin.com/in/brunawslopes"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>

                    <a
                        href="https://github.com/woody-m"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                </div>


            </div>

            <div className="hero-right">
                {/* sua foto profissional */}
                <img
                    src={brunaImage}
                    alt="Bruna Lopes"
                    className="hero-photo"
                />
            </div>
        </section >
    );
}

export default Hero;
