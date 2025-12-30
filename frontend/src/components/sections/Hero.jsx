import './hero.css';
import heroImage from '../../assets/images/hero.png';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className="hello">Hello 👋, I am</p>

                <h1>
                    Bruna <br />
                    <span>Lopes</span>
                </h1>

                <p className="description">
                    Aliquam commodo mi semper metus mattis, ac tincidunt metus molestie.
                    Aenean lobortis augue sit amet.
                </p>

                <button className="cv-btn">Download CV</button>

                <div className="socials">
                    <span>●</span><span>●</span><span>●</span><span>●</span>
                </div>
            </div>

            <div className="hero-right">
                <img src={heroImage} alt="profile" />
            </div>
        </section>
    );
}

export default Hero;
