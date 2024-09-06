import React from "react";
import './Contacts.scss';
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
    return (
        <div className="contacts-container">
            <h1 className="title">Contact Me!</h1>
            <div className="form-container">
                <h2 className="form-title">Let's Chat!</h2>
                <div className="contact-links">
                    <a href="mailto:enochblake9@gmail.com" className="contact-icon" title="Email Me">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.linkedin.com/in/enoch-kibet-4a1a78322/" className="contact-icon" title="LinkedIn Profile">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/enochblake" className="contact-icon" title="GitHub Profile">
                        <FaGithub />
                    </a>
                </div>
                <form className="contact-form" action="https://formsubmit.co/enochblake9@gmail.com" method="POST">
                    <div className="form-group">
                        <label className="form-label"><IoMdContact /> Name:</label>
                        <input type="text" name="name" placeholder="Enter your name" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label"><MdEmail /> Email:</label>
                        <input type="email" name="email" placeholder="Enter your email" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label"><AiFillMessage /> Subject:</label>
                        <input type="text" name="subject" placeholder="Enter the subject" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Message:</label>
                        <textarea name="message" placeholder="Enter your message" required className="form-textarea"></textarea>
                    </div>
                    
                    {/* Hidden fields for security and redirection */}
                    {/* <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
                    <input type="hidden" name="_captcha" value="false" /> */}

                    <button className="form-submit" type="submit">
                        Submit <BsFillSendFill />
                    </button>
                </form>
            </div>
        </div>
    );
}
