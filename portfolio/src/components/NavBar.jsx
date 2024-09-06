// // // import React, { useState } from "react";
// // // import { NavLink } from "react-router-dom";
// // // import './Navbar.scss';

// // // export default function NavBar() {
// // //   const [navActive, setNavActive] = useState(false);

// // //   const toggleNav = () => {
// // //     setNavActive(!navActive);
// // //   };

// // //   return (
// // //     <nav className="navbar">
// // //       <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
// // //         <li className="link">
// // //           <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
// // //         </li>
// // //         <li className="link">
// // //           <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
// // //         </li>
// // //         <li className="link">
// // //           <NavLink to="/resume" activeClassName="active" className="nav-link">Resume</NavLink>
// // //         </li>
// // //         <li className="link">
// // //           <NavLink to="/projects" activeClassName="active" className="nav-link">Projects</NavLink>
// // //         </li>
// // //         <li className="link">
// // //           <NavLink to="/contact" activeClassName="active" className="nav-link">Contacts</NavLink>
// // //         </li>
// // //       </ul>
// // //       <div className={`hamburger ${navActive ? 'hamburger-active' : ''}`} onClick={toggleNav}>
// // //         <span></span>
// // //         <span></span>
// // //         <span></span>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import './Navbar.scss';

// // export default function NavBar() {
// //   const [navActive, setNavActive] = useState(false);

// //   const toggleNav = () => {
// //     setNavActive(!navActive);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
// //         <li className="link">
// //           <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
// //         </li>
// //         <li className="link">
// //           <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
// //         </li>
// //         <li className="link">
// //           <NavLink to="/resume" activeClassName="active" className="nav-link">Resume</NavLink>
// //         </li>
// //         <li className="link">
// //           <NavLink to="/projects" activeClassName="active" className="nav-link">Projects</NavLink>
// //         </li>
// //         <li className="link">
// //           <NavLink to="/contact" activeClassName="active" className="nav-link">Contacts</NavLink>
// //         </li>
// //       </ul>

// //       {/* Hamburger Menu */}
// //       <div className={`hamburger ${navActive ? 'hamburger-active' : ''}`} onClick={toggleNav}>
// //         <span></span>
// //         <span></span>
// //         <span></span>
// //       </div>
// //     </nav>
// //   );
// // }


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import './Navbar.scss';

// export default function NavBar() {
//   const [navActive, setNavActive] = useState(false);

//   const toggleNav = () => {
//     setNavActive(!navActive);
//   };

//   return (
//     <nav className="navbar">
//       <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
//         <li className="link">
//           <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
//         </li>
//         <li className="link">
//           <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
//         </li>
//         <li className="link">
//           <NavLink to="/resume" activeClassName="active" className="nav-link">Resume</NavLink>
//         </li>
//         <li className="link">
//           <NavLink to="/projects" activeClassName="active" className="nav-link">Projects</NavLink>
//         </li>
//         <li className="link">
//           <NavLink to="/contact" activeClassName="active" className="nav-link">Contacts</NavLink>
//         </li>
//       </ul>

//       {/* Hamburger Menu */}
//       <div className={`hamburger ${navActive ? 'hamburger-active' : ''}`} onClick={toggleNav}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// }


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

export default function NavBar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        <li className="link">
          <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
        </li>
        <li className="link">
          <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
        </li>
        <li className="link">
          <NavLink to="/resume" activeClassName="active" className="nav-link">Resume</NavLink>
        </li>
        <li className="link">
          <NavLink to="/projects" activeClassName="active" className="nav-link">Projects</NavLink>
        </li>
        <li className="link">
          <NavLink to="/contact" activeClassName="active" className="nav-link">Contacts</NavLink>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className={`hamburger ${navActive ? 'hamburger-active' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}


