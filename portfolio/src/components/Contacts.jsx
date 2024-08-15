// // import React, { useRef } from 'react';
// // import emailjs from '@emailjs/browser';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import './Contacts.scss';

// // const Contacts = () => {
// //   const form = useRef();

// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs.sendForm(
// //       'your_service_id',
// //       'your_template_id',
// //       form.current,
// //       'your_user_id'
// //     )
// //       .then(
// //         (result) => {
// //           console.log(result.text);
// //           toast.success('Message sent successfully!');
// //         },
// //         (error) => {
// //           console.log(error.text);
// //           toast.error('Failed to send message. Please try again.');
// //         }
// //       );
// //   };

// //   return (
// //     <div className="contact-page">
// //       <div className="contact-container">
// //         <div className="contact-left">
// //           <h1>Contact Me</h1>
// //           <p>
// //             I'm always open to discussing new opportunities, creative ideas, or potential collaborations. Feel free to reach out via the form or through the contact information provided.
// //           </p>
// //           <div className="contact-info">
// //             <div className="contact-info-part">
// //               <p>
// //                 <FontAwesomeIcon icon={faLocationPin} className="icon" />
// //                 Nairobi, Kenya
// //               </p>
// //             </div>
// //             <div className="contact-info-part">
// //               <p>
// //                 <FontAwesomeIcon icon={faPhone} className="icon" />
// //                 +254 712 345 678
// //               </p>
// //             </div>
// //             <div className="contact-info-part">
// //               <p>
// //                 <FontAwesomeIcon icon={faEnvelope} className="icon" />
// //                 yourname@example.com
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="contact-right">
// //           <div className="details-container">
// //             <h4>GET IN TOUCH</h4>
// //           </div>
// //           <form ref={form} onSubmit={sendEmail} className="contact-form">
// //             <div className="form-group">
// //               <input type="text" name="user_name" placeholder="Your Name" required />
// //               <input type="email" name="user_email" placeholder="Your Email" required />
// //             </div>
// //             <div className="form-group">
// //               <textarea name="message" placeholder="Your Message" rows="4" required />
// //             </div>
// //             <button type="submit">SEND MESSAGE</button>
// //           </form>
// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default Contacts;


// import React from "react";
// // import './contacts.css';
// import { IoMdContact } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import { AiFillMessage } from "react-icons/ai";
// import { BsFillSendFill } from "react-icons/bs";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import './Contacts.scss';

// export default function Contacts() {
//     return (
//         <div className="contacts-container">
//             <h1 className="text-3xl font-extrabold text-center mb-6 mt-6" style={{color: '#4F2E57'}}>Contact Me!</h1>
//             <div className="form-container">
//                 <h2 className="form-title">Let's Chat!</h2>
//                 <div className="contact-links">
//                     <a href="mailto:esaru008@gmail.com" className="contact-icon" title="Email Me">
//                         <FaEnvelope />
//                     </a>
//                     <a href="https://www.linkedin.com/in/efjeniah-saru-0b3ba62b9" className="contact-icon" title="LinkedIn Profile">
//                         <FaLinkedin />
//                     </a>
//                     <a href="https://github.com/E-Saru" className="contact-icon" title="GitHub Profile">
//                         <FaGithub />
//                     </a>
//                 </div>
//                 <form className="contact-form" action="https://formsubmit.co/esaru008@gmail.com" method="POST">
//                     <div className="form-group">
//                         <label className="form-label"><IoMdContact /> Name:</label>
//                         <input type="text" name="name" placeholder="Enter your name" required className="form-input" />
//                     </div>
//                     <div className="form-group">
//                         <label className="form-label"><MdEmail /> Email:</label>
//                         <input type="email" name="email" placeholder="Enter your email" required className="form-input" />
//                     </div>
//                     <div className="form-group">
//                         <label className="form-label"><AiFillMessage /> Subject:</label>
//                         <input type="text" name="subject" placeholder="Enter the subject" required className="form-input" />
//                     </div>
//                     <div className="form-group">
//                         <textarea name="message" placeholder="Enter your message" required className="form-textarea"></textarea>
//                     </div>
//                     <button className="form-submit" type="submit">
//                         Submit <BsFillSendFill />
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contacts.scss';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_user_id'
    )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact Me</h1>
          <p>
            I'm always open to discussing new opportunities, creative ideas, or potential collaborations. Feel free to reach out via the form or through the contact information provided.
          </p>
          <div className="contact-info">
            <div className="contact-info-part">
              <p>
                <FontAwesomeIcon icon={faLocationPin} className="icon" />
                Nairobi, Kenya
              </p>
            </div>
            <div className="contact-info-part">
              <p>
                <FontAwesomeIcon icon={faPhone} className="icon" />
                +254 712 345 678
              </p>
            </div>
            <div className="contact-info-part">
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                yourname@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="details-container">
            <h4>GET IN TOUCH</h4>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="4" required />
            </div>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contacts;
