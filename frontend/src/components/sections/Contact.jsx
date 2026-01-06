import './contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-left">
                <h2>Contact</h2>
                <p><b>Let’s connect.🤝
</b>
                    <br />
                    Whether it’s a new professional opportunity or a freelance collaboration, I’m open to discussing my way of working and contributing to software projects.
                </p>
            </div>

            <div className="contact-right">
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Tell me about your project" rows="4" />
                    <button type="submit" className="contact-btn">START CONVERSATION</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
