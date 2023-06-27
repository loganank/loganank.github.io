import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = ({ title }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_zatv0ec', 'template_ornqcbh', form.current, 'rZmysJyP4UA7TLhyD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div class="contact container" id="contact">
            <h2 class="projects-title text-primary m-3">{title}</h2>
            <div class="row w-50 mx-auto m-3">
                <div class="card">
                    <div className="contact-form container">
                        <form id="contact-form" className="contact-form" ref={form} onSubmit={sendEmail}>
                            <h5 class="text-secondary-emphasis p-2">Name</h5>
                            <input
                                type="text"
                                id="name"
                                name="sender-name"
                                placeholder="Enter Your Name"
                                className="input-field form-control"
                                required
                            />
                            <h5 class="text-secondary-emphasis p-2">Email</h5>
                            <input
                                type="email"
                                id="email"
                                name="sender-email"
                                placeholder="Enter Your Email"
                                className="input-field form-control"
                                required
                            />
                            <h5 class="text-secondary-emphasis p-2">Message</h5>
                            <textarea
                                id="message"
                                placeholder="Enter Your Message"
                                name="message"
                                className="input-field form-control"
                                required
                            ></textarea>
                            <input
                                type="submit"
                                value="Submit"
                                id="submit-btn"
                                className="btn btn-primary m-1"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ContactMe };