// // import React from "react";
// // import './About.scss';
// // import { Link } from 'react-router-dom';
// // // import { FaCode, FaLaptopCode, FaLightbulb, FaUsers } from "react-icons/fa";

// // export default function About() {
// //     return (
// //         <div className="about-container">
// //             <h1 className="text-3xl font-extrabold text-center mb-6 mt-1" style={{color: '#4F2E57'}}>About Me!</h1>
// //             <div className="flex-about">
// //                 <div className="about-text">
// //                     <img 
// //                         src="https://static.vecteezy.com/system/resources/previews/006/800/646/non_2x/information-science-illustration-exclusive-design-inspiration-vector.jpg" 
// //                         alt="vector"
// //                         className="about-img"
// //                     />
// //                 </div>
// //                 <div className="about">
// //                     <p className="text-xl text-justify">
// //                         I'm a driven and passionate Full-stack Software Developer with a strong foundation in Information Technology. I specialize in crafting full-stack solutions that enhance digital experiences. My journey in tech has been shaped by a love for both front-end elegance and backend robustness.
// //                     </p>
// //                     <p className="text-xl text-justify">
// //                         I thrive in environments where creativity meets collaboration, and I'm always eager to tackle new challenges and bring innovative ideas to life. Whether it's building secure, efficient systems or designing intuitive user interfaces, I'm committed to making a positive impact through technology.
// //                     </p>
// //                     <p className="text-xl text-justify">
// //                         Let's navigate the ever-evolving digital landscape together, one line of code at a time!
// //                     </p>
// //                 </div>
// //                 <div className="about-contact">
// //                     <button><Link to='/contact'> Contact Me!</Link></button>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode, faLaptopCode, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';
// // import aboutImage from '../Assets/aboutImage.jpg'; // replace with your actual image path
// import './About.scss';

// export default function About() {
//   return (
//     <div className="about-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <i alt="About" className="hero-image" />
//         <div className="hero-content">
//           <h1>About Me</h1>
//           <p>I'm a Full-stack Developer specializing in crafting full-stack solutions that enhance digital experiences.</p>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="content-section">
//         <div className="cards-container">
//           <div className="card">
//             <FontAwesomeIcon icon={faCode} className="icon" />
//             <h2>Front-End Development</h2>
//             <p>Creating intuitive and responsive user interfaces using React, HTML, CSS, and JavaScript.</p>
//           </div>
//           <div className="card">
//             <FontAwesomeIcon icon={faLaptopCode} className="icon" />
//             <h2>Back-End Development</h2>
//             <p>Building robust and secure backend systems using Node.js, Express, and SQL/NoSQL databases.</p>
//           </div>
//           <div className="card">
//             <FontAwesomeIcon icon={faLightbulb} className="icon" />
//             <h2>Problem Solving</h2>
//             <p>Thriving in environments where creativity meets collaboration, tackling challenges with innovative solutions.</p>
//           </div>
//           <div className="card">
//             <FontAwesomeIcon icon={faUsers} className="icon" />
//             <h2>Team Collaboration</h2>
//             <p>Working closely with cross-functional teams to deliver high-quality, user-centered products.</p>
//           </div>
//         </div>
//         <div className="big-card">
//           <div className="text-container">
//             <h2>Let's Collaborate!</h2>
//             <p>I'm always eager to tackle new challenges and bring innovative ideas to life. Let's navigate the digital landscape together!</p>
//             {/* <button><Link to='/contact'>Contact Me</Link></button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';
import './About.scss';

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"  // Replace with your actual image URL
          alt="About" 
          className="hero-image" 
        />
        <div className="hero-content">
          <h1>About Me</h1>
          <p>I'm a Full-stack Developer specializing in crafting full-stack solutions that enhance digital experiences.</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="content-section">
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h2>Front-End Development</h2>
            <p>Creating intuitive and responsive user interfaces using React, HTML, CSS, and JavaScript.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
            <h2>Back-End Development</h2>
            <p>Building robust and secure backend systems using Node.js, Express, and SQL/NoSQL databases.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faLightbulb} className="icon" />
            <h2>Problem Solving</h2>
            <p>Thriving in environments where creativity meets collaboration, tackling challenges with innovative solutions.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h2>Team Collaboration</h2>
            <p>Working closely with cross-functional teams to deliver high-quality, user-centered products.</p>
          </div>
        </div>
        <div className="big-card">
          <div className="text-container">
            <h2>Let's Collaborate!</h2>
            <p>I'm always eager to tackle new challenges and bring innovative ideas to life. Let's navigate the digital landscape together!</p>
            <button><a href="/contact">Contact Me</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
