import "./contact.css";

function Contact() {
    return (
        <div className="contact-page">

            <div className="contact-heading">
                <h1>Contact Us</h1>
                <p>
                    Have questions about solar energy? Get in touch with us.
                </p>
            </div>

            <div className="contact-container">

                {/* Contact Information */}
                <div className="contact-info">

                    <h2>Get In Touch</h2>

                    <p>
                        📞 <span>+91 8096858531</span>
                    </p>

                    <p>
                        📧 <span>bobbharshadkumar877@gmail.com</span>
                    </p>

                    <p>
                        🗺️ <span>Tanuku, Andhra Pradesh</span>
                    </p>

                    <h3>Follow Us</h3>

                    <div className="social-media">
                        <span>📸</span>
                        <span>👍</span>
                        <span>▶️</span>
                        <span>💼</span>
                        <span>💬</span>
                    </div>

                </div>


                {/* Contact Form */}
                <div className="contact-form">

                    <h2>Send Us a Message</h2>

                    <form>

                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                        />

                        <input
                            type="tel"
                            placeholder="Your Phone Number"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                        ></textarea>

                        <button type="submit">
                            Send Message →
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;