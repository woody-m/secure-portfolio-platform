import './contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-left">
                <h2>Contact</h2>
                <p>
                    Feel free to reach out for collaborations, projects
                    or just a friendly hello 👋
                </p>
            </div>

            <div className="contact-right">
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message" rows="4" />
                    <button type="submit">SEND MESSAGE</button>
                </form>

                <div className="social-icons">
                    <span>in</span>
                    <span>f</span>
                    <span>x</span>
                    <span>g</span>
                    <span>t</span>
                </div>
            </div>
        </section>
    );
}

export default Contact;
