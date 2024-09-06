// import React from 'react';
// import './Resume.scss'
// import { Link } from 'react-router-dom';
// import { MdOutlineDateRange, MdSchool, MdOutlineWork, MdOutlineCode } from "react-icons/md";
// import { FaSchool, FaHtml5, FaCss3Alt, FaPython, FaReact, FaGitAlt, FaLinux, FaNodeJs, FaPhp } from "react-icons/fa";
// import { SiJavascript, SiFlask, SiSqlite, SiFigma } from "react-icons/si";
// import { GoOrganization } from "react-icons/go";
// import { IoMdPeople } from "react-icons/io";
// import { AiOutlineTeam, AiOutlineClockCircle, AiOutlineBulb } from "react-icons/ai";
// import { FiTarget } from "react-icons/fi";
// import { GiTalk, GiNetworkBars } from "react-icons/gi";
// import { BsTools } from "react-icons/bs";

// function Resume() {
//   return (
//     <div className='resume'>
//       <div className='side'>
//         <img src="https://static.vecteezy.com/syhttps://plus.unsplash.com/premium_photo-1681457330049-dcdb2ac363fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YSUyMGNhcnRvb24lMjBjaGFyYWN0ZXIlMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3Dstem/resources/previews/006/800/646/non_2x/information-science-illustration-exclusive-design-inspiration-vector.jpg" alt="vector" />
//         <div className='navigation'>
//           <ul className='link-resume'>
//             <li className='side-resume'><Link path='/resume'>Education</Link></li>
//             <li className='side-resume'><Link path='/resume'>Experience</Link></li>
//             <li className='side-resume'><Link path='/resume'>Skills</Link></li>
//             <li className='side-resume'><Link path='/projects'>Projects</Link></li>
//           </ul>
//         </div>
//       </div>
//       <div className='main'>
//         <h1 className="text-3xl font-extrabold text-center mb-6 mt-1" style={{color: '#4F2E57'}}>Resume</h1>
//         <section className='education'>
//           <h2 style={{backgroundColor: '#B79CCC'}}>Education</h2>
//           <div className='educate'>
//             <div className='school'>
//               <div className='date-icon'>
//                 <MdOutlineDateRange />
//                 <span className='date'>2023-2024</span>
//               </div>
//               <div className='info'>
//                 <FaSchool />
//                 <span>Moringa School</span>
//               </div>
//               <div className='info'>
//                 <MdSchool />
//                 <span>Full Stack Software Development</span>
//               </div>
//             </div>
//             <div className='school'>
//               <div className='date-icon'>
//                 <MdOutlineDateRange />
//                 <span className='date'>2023-2028</span>
//               </div>
//               <div className='info'>
//                 <FaSchool />
//                 <span>United States International University </span>
//               </div>
//               <div className='info'>
//                 <MdSchool />
//                 <span>Bachelor of Science in Software Engineering</span>
//               </div>
//             </div>
//             <div className='school'>
//               <div className='date-icon'>
//                 <MdOutlineDateRange />
//                 <span className='date'>2019-2022</span>
//               </div>
//               <div className='info'>
//                 <FaSchool />
//                 <span>Chogoria School</span>
//               </div>
//               <div className='info'>
//                 <MdSchool />
//                 <span>Secondary Education</span>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className='experience'>
//           <h2 style={{backgroundColor: '#B79CCC'}}>Experience</h2>
//           <div className='job'>
//             <div className='date-icon'>
//               <MdOutlineDateRange />
//               <span className='date'>2024</span>
//             </div>
//             <div className='info'>
//               <MdOutlineWork />
//               <span>Software Development Trainee</span>
//             </div>
//             <div className='info'>
//               <GoOrganization />
//               <span>Nexus</span>
//             </div>
//           </div>
//         </section>
//         <section className='skills'>
//           <h2 style={{backgroundColor: '#B79CCC'}}>Skills</h2>
//           <div className='skills-container'>
//             <div className='tech-skills'>
//               <h3>Technical Skills</h3>
//               <ul className='nav-resume'>
//                 <li className='resume-skills'><FaHtml5 /> HTML</li>
//                 <li className='resume-skills'><FaCss3Alt /> CSS</li>
//                 <li className='resume-skills'><SiJavascript /> JavaScript</li>
//                 <li className='resume-skills'><FaPython /> Python</li>
//                 <li className='resume-skills'><FaReact /> ReactJs</li>
//                 <li className='resume-skills'><SiFlask /> Flask</li>
//                 <li className='resume-skills'><SiFigma /> UI/UX</li>
//                 <li className='resume-skills'><FaGitAlt /> Git</li>
//                 <li className='resume-skills'><FaLinux /> Linux</li>
//                 <li className='resume-skills'><FaNodeJs /> NodeJs</li>
//                 <li className='resume-skills'><FaPhp /> PHP</li>
//                 <li className='resume-skills'><SiSqlite /> SQL</li>
//                 <li className='resume-skills'><MdOutlineCode /> Database Management</li>
//                 <li className='resume-skills'><BsTools /> User Support</li>
//                 <li className='resume-skills'><GiNetworkBars /> Network Configuration</li>
//                 <li className='resume-skills'><MdOutlineCode /> Technical Documentation</li>
//               </ul>
//             </div>
//             <div className='soft-skills'>
//               <h3>Soft Skills</h3>
//               <ul className='nav-resume'>
//                 <li className='resume-skills'><GiTalk /> Communication & Problem-Solving</li>
//                 <li className='resume-skills'><AiOutlineTeam /> Teamwork & Adaptability</li>
//                 <li className='resume-skills'><AiOutlineClockCircle /> Time Management & Attention to Detail</li>
//                 <li className='resume-skills'><AiOutlineBulb /> Critical Thinking & Creativity</li>
//                 <li className='resume-skills'><FiTarget /> Empathy & Patience</li>
//                 <li className='resume-skills'><IoMdPeople /> Leadership & Conflict Resolution</li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Resume;

import React from 'react';
import './Resume.scss'
import { Link } from 'react-router-dom';
import { MdOutlineDateRange, MdSchool, MdOutlineWork, MdOutlineCode } from "react-icons/md";
import { FaSchool, FaHtml5, FaCss3Alt, FaPython, FaReact, FaGitAlt, FaLinux, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiJavascript, SiFlask, SiSqlite, SiFigma } from "react-icons/si";
import { GoOrganization } from "react-icons/go";
import { IoMdPeople } from "react-icons/io";
import { AiOutlineTeam, AiOutlineClockCircle, AiOutlineBulb } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { GiTalk, GiNetworkBars } from "react-icons/gi";
import { BsTools } from "react-icons/bs";

function Resume() {
  const imageUrl = "https://plus.unsplash.com/premium_photo-1681457330049-dcdb2ac363fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YSUyMGNhcnRvb24lMjBjaGFyYWN0ZXIlMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D";
  
  return (
    <div className='resume'>
      <div className='side'>
        <img src={imageUrl} alt="Profile Illustration" />
        <div className='navigation'>
          <ul className='link-resume'>
            <li className='side-resume'><Link to='/resume'>Education</Link></li>
            <li className='side-resume'><Link to='/resume'>Experience</Link></li>
            <li className='side-resume'><Link to='/resume'>Skills</Link></li>
            <li className='side-resume'><Link to='/projects'>Projects</Link></li>
          </ul>
        </div>
      </div>
      <div className='main'>
        <h1 className="text-3xl font-extrabold text-center mb-6 mt-1" style={{ color: '#f0a314' }}>Resume</h1>
        <section className='education'>
          <h2 style={{ backgroundColor: '#f7b24c' }}>Education</h2>
          <div className='educate'>
            <div className='school'>
              <div className='date-icon'>
                <MdOutlineDateRange />
                <span className='date'>2023-2024</span>
              </div>
              <div className='info'>
                <FaSchool />
                <span>Moringa School</span>
              </div>
              <div className='info'>
                <MdSchool />
                <span>Full Stack Software Development</span>
              </div>
            </div>
            <div className='school'>
              <div className='date-icon'>
                <MdOutlineDateRange />
                <span className='date'>2023-2028</span>
              </div>
              <div className='info'>
                <FaSchool />
                <span>United States International University</span>
              </div>
              <div className='info'>
                <MdSchool />
                <span>Bachelor of Science in Software Engineering</span>
              </div>
            </div>
            <div className='school'>
              <div className='date-icon'>
                <MdOutlineDateRange />
                <span className='date'>2019-2022</span>
              </div>
              <div className='info'>
                <FaSchool />
                <span>Chogoria School</span>
              </div>
              <div className='info'>
                <MdSchool />
                <span>Secondary Education</span>
              </div>
            </div>
          </div>
        </section>
        <section className='experience'>
          <h2 style={{ backgroundColor: '#f7b24c' }}>Experience</h2>
          <div className='job'>
            <div className='date-icon'>
              <MdOutlineDateRange />
              <span className='date'>2024</span>
            </div>
            <div className='info'>
              <MdOutlineWork />
              <span>Software Development Trainee</span>
            </div>
            <div className='info'>
              <GoOrganization />
              <span>Nexus</span>
            </div>
          </div>
        </section>
        <section className='skills'>
          <h2 style={{ backgroundColor: '#f7b24c' }}>Skills</h2>
          <div className='skills-container'>
            <div className='tech-skills'>
              <h3>Technical Skills</h3>
              <ul className='nav-resume'>
                <li className='resume-skills'><FaHtml5 /> HTML</li>
                <li className='resume-skills'><FaCss3Alt /> CSS</li>
                <li className='resume-skills'><SiJavascript /> JavaScript</li>
                <li className='resume-skills'><FaPython /> Python</li>
                <li className='resume-skills'><FaReact /> ReactJs</li>
                <li className='resume-skills'><SiFlask /> Flask</li>
                <li className='resume-skills'><SiFigma /> UI/UX</li>
                <li className='resume-skills'><FaGitAlt /> Git</li>
                <li className='resume-skills'><FaLinux /> Linux</li>
                <li className='resume-skills'><FaNodeJs /> NodeJs</li>
                <li className='resume-skills'><FaPhp /> PHP</li>
                <li className='resume-skills'><SiSqlite /> SQL</li>
                <li className='resume-skills'><MdOutlineCode /> Database Management</li>
                <li className='resume-skills'><BsTools /> User Support</li>
                <li className='resume-skills'><GiNetworkBars /> Network Configuration</li>
                <li className='resume-skills'><MdOutlineCode /> Technical Documentation</li>
              </ul>
            </div>
            <div className='soft-skills'>
              <h3>Soft Skills</h3>
              <ul className='nav-resume'>
                <li className='resume-skills'><GiTalk /> Communication & Problem-Solving</li>
                <li className='resume-skills'><AiOutlineTeam /> Teamwork & Adaptability</li>
                <li className='resume-skills'><AiOutlineClockCircle /> Time Management & Attention to Detail</li>
                <li className='resume-skills'><AiOutlineBulb /> Critical Thinking & Creativity</li>
                <li className='resume-skills'><FiTarget /> Empathy & Patience</li>
                <li className='resume-skills'><IoMdPeople /> Leadership & Conflict Resolution</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
