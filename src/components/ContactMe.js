import '../css/ContactMe.css';
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
        <section className="contact" id="contact">
            <h2>{title}</h2>
            <div className="contact-form-container">
                <form id="contact-form" className="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-control">
                        <label htmlFor="name" >Name</label>
                        <input
                            type="text"
                            id="name"
                            name="sender-name"
                            placeholder="Enter Your Name"
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="sender-email"
                            placeholder="Enter Your Email"
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            cols="60"
                            rows="10"
                            placeholder="Enter Your Message"
                            name="message"
                            className="input-field"
                            required
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        id="submit-btn"
                        className="submit-btn"
                    />
                </form>
            </div>
        </section>
    );
};

export { ContactMe };