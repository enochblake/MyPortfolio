// import React from "react";
// import './Projects.scss';
// import { FaReact, FaPython, FaCcStripe} from "react-icons/fa";
// import { SiFlask, SiRedux, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiCloudinary, SiJsonwebtokens, SiVercel, SiRender } from "react-icons/si";
// import { TbJson } from "react-icons/tb";

// export default function Projects() {
//     return (
//         <section className="projects-section">
//             <h1 className="text-3xl font-extrabold text-center mb-8">My Projects</h1>
//             <div className="projects-container">

//                 <div className="project-card">
//                     <a href="https://online-charity-management.onrender.com/" target="_blank" rel="noopener noreferrer">
//                         <img className="project-image" src="./Logo.jpg" alt="Online Charity Management System" />
                    
//                     <h2 className="project-title">Online Charity Management System</h2>
//                     <p className="project-description">
//                         A comprehensive web application to facilitate online donations and fund management for non-profit organizations. Built with a modern tech stack including React, Redux, Python, and Flask, it enables secure and efficient transactions for donors, NGOs, and admins.
//                     </p>
//                     <div className="project-tech">
//                         <FaReact /> <SiRedux /> <FaPython /> <SiFlask /> <SiPostgresql /> <SiCloudinary /> <FaCcStripe /> <SiJsonwebtokens /> <SiRender />
//                     </div>
//                     </a>
//                 </div>

//                 <div className="project-card">
//                     <a href="https://gen-ztea-qi91.onrender.com/" target="_blank" rel="noopener noreferrer">
//                         <img className="project-image" src="./joanna-kosinska-B43a-FPxYqU-unsplash.jpg" alt="Z-Tea Ecommerce System" />
                    
//                     <h2 className="project-title">Z-Tea Ecommerce System</h2>
//                     <p className="project-description">
//                         A robust e-commerce platform for specialty teas, leveraging technologies like React.js, Flask, and MongoDB. The platform ensures a seamless shopping experience and includes secure transaction processing and comprehensive admin tools.
//                     </p>
//                     <div className="project-tech">
//                         <FaReact /> <SiFlask /> <SiMongodb /> <SiPostgresql /> <SiCloudinary /> <FaCcStripe /> <SiJsonwebtokens /> <SiRender />
//                     </div>
//                     </a>
//                 </div>

//                 <div className="project-card">
//                     <a href="https://monstro-app.vercel.app/" target="_blank" rel="noopener noreferrer">
//                         <img className="project-image" src="./noaa-Led9c1SSNFo-unsplash.jpg" alt="Monstro Weather App" />
                    
//                     <h2 className="project-title">Monstro Weather App </h2>
//                     <p className="project-description">
//                         A React-based application providing real-time weather updates for various locations. Monstro features a user-friendly interface, offline access, customizable settings, and is tailored for weather enthusiasts and professionals. It includes components like TemperatureConverter, WeatherComparison, and more.
//                     </p>
//                     <div className="project-tech">
//                         <FaReact /> <SiHtml5 /> <SiCss3 /> <SiJavascript /> <TbJson /> <SiVercel />
//                     </div>
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }


import React from "react";
import './Projects.scss';
import { FaReact, FaPython, FaCcStripe } from "react-icons/fa";
import { SiFlask, SiRedux, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiCloudinary, SiJsonwebtokens, SiVercel, SiRender } from "react-icons/si";
import { TbJson } from "react-icons/tb";

export default function Projects() {
    return (
        <section className="projects-section">
            <h1 className="text-3xl font-extrabold text-center mb-8">My Projects</h1>
            <div className="projects-container">

                <div className="project-card">
                    <a href="https://mazingira-application.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <img 
                            className="project-image" 
                            src="https://media.istockphoto.com/id/1477731413/photo/volunteers-hands-stacking-in-a-circle.webp?a=1&b=1&s=612x612&w=0&k=20&c=yckTI0bIl_9oSPhfDhgLJCnQyARQotlQKXW7rOVuue8=" 
                            alt="Online Charity Management System" 
                        />
                        <h2 className="project-title">Online Charity Management System</h2>
                        <p className="project-description">
                            A comprehensive web application to facilitate online donations and fund management for non-profit organizations. Built with a modern tech stack including React, Redux, Python, and Flask, it enables secure and efficient transactions for donors, NGOs, and admins.
                        </p>
                        <div className="project-tech">
                            <FaReact /> <SiRedux /> <FaPython /> <SiFlask /> <SiPostgresql /> <SiCloudinary /> <FaCcStripe /> <SiJsonwebtokens /> <SiRender />
                        </div>
                    </a>
                </div>

                <div className="project-card">
                    <a href="https://gen-ztea-qi91.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <img 
                            className="project-image" 
                            src="https://images.unsplash.com/photo-1467164616789-ce7ae65ab4c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhfGVufDB8fDB8fHww" 
                            alt="Z-Tea Ecommerce System" 
                        />
                        <h2 className="project-title">Z-Tea Ecommerce System</h2>
                        <p className="project-description">
                            A robust e-commerce platform for specialty teas, leveraging technologies like React.js, Flask, and MongoDB. The platform ensures a seamless shopping experience and includes secure transaction processing and comprehensive admin tools.
                        </p>
                        <div className="project-tech">
                            <FaReact /> <SiFlask /> <SiMongodb /> <SiPostgresql /> <SiCloudinary /> <FaCcStripe /> <SiJsonwebtokens /> <SiRender />
                        </div>
                    </a>
                </div>

                <div className="project-card">
                    <a href="https://monstro-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img 
                            className="project-image" 
                            src="https://images.unsplash.com/photo-1561485039-765c8e81686d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D" 
                            alt="Monstro Weather App" 
                        />
                        <h2 className="project-title">Monstro Weather App</h2>
                        <p className="project-description">
                            A React-based application providing real-time weather updates for various locations. Monstro features a user-friendly interface, offline access, customizable settings, and is tailored for weather enthusiasts and professionals. It includes components like TemperatureConverter, WeatherComparison, and more.
                        </p>
                        <div className="project-tech">
                            <FaReact /> <SiHtml5 /> <SiCss3 /> <SiJavascript /> <TbJson /> <SiVercel />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
