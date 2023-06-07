import '../css/ContactMe.css';

const ContactMe = ({ title }) => (
    <section class="contact" id="contact">
        <h2>{title}</h2>
        <div class="contact-form-container">
            <div class="contact-form">
                <form action="https://formspree.io/f/xyylngw" method="POST">
                    <div class="form-control">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="sender-name"
                            placeholder="Enter Your Name"
                            class="input-field"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="sender-email"
                            placeholder="Enter Your Email"
                            class="input-field"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            cols="60"
                            rows="10"
                            placeholder="Enter Your Message"
                            name="message"
                            class="input-field"
                            required
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        id="submit-btn"
                        class="submit-btn"
                    />
                </form>
            </div>
        </div>
    </section>
);

export { ContactMe };