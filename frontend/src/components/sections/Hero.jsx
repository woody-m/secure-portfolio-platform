import './hero.css';
import brunaImage from '../../assets/images/bruna.png';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className="hello">Hello 👋, I am</p>

                <h1>
                    Bruna Lopes<br /><span></span>
                </h1>

                <p className="description">
                    Software Engineer specialized in architecture, security, and scalable digital solutions.
                    I build robust systems that transform complex requirements into reliable products.
                    My work is guided by strong engineering principles, clean architecture, and security by design, delivering solutions built to scale, maintain, and generate real business value.
                </p>
                <a
                    href="/CV/Bruna-Lopes-Software-Engineer.pdf"
                    download
                    className="cv-btn"
                >
                    Download CV
                </a>



                <div className="socials">
                    <span>●</span><span>●</span><span>●</span><span>●</span><span>●</span>
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
        </section>
    );
}

export default Hero;
