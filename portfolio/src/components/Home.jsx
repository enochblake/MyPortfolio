// // // import React from 'react';
// // // import './Home.scss';

// // // const Home = () => {
// // //   return (
// // //     <div className="home-container">
// // //       <div className="home-content">
// // //         <h2>Hi</h2>
// // //         <h1>
// // //           I'm <span className="name-highlight">Hannah</span>
// // //           <br />
// // //           a Frontend Developer
// // //         </h1>
// // //         <p>
// // //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
// // //           dolorem cum laudantium, unde voluptatum nemo non exercitationem neque
// // //           ab delectus voluptas asperiores architecto ad eveniet molestiae
// // //           provident harum pariatur porro.
// // //         </p>
// // //         <div className="home-buttons">
// // //           <button className="black-button">Studio</button>
// // //           <button className="red-button">Experience</button>
// // //         </div>
// // //       </div>
// // //       <div className="home-image">
// // //         <img src="your-image-path.jpg" alt="Hannah" />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React from "react";
// // import "./Home.scss";
// // import About from "./About";
// // import Resume from "./Resume";
// // import Projects from "./Projects.jsx";
// // import Contacts from "./Contacts";
// // import { Link } from "react-router-dom";

// // function Home(){
// //     return(
// //         <div className="home">
// //             <div className="saru">
// //             <div className="background">
// //                 <div className="overlay">
// //                     <div className="container">
// //                         <div className="content">
// //                             <h1 className="text-2xl">Welcome to the Digital Wonderland of Efjeniah!</h1>
// //                             <h2 className="text-xl"><i>"Fierce and fabulous in the world of ones and zeros!"</i></h2>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="name">
// //                 <h1>Hello! , I'm Efjeniah Saru</h1>
// //                 <h2 className="stack">Full-Stack Software Developer</h2>
// //                 <p className="tch">I'm a tech enthusiast with a passion for creativity and problem-solving. Whether crafting elegant front-end designs or diving into backend architecture, I thrive on bringing ideas to life in the digital realm.
// //                     Join me as we conquer the binary jungle together, one line of code at a time!</p>
// //                 <div className="btns">
// //                     <button className="btn"><Link to='resume'>Resume</Link></button>
// //                     <button className="btn"><Link to='projects'>Projects</Link></button>
// //                 </div>
// //             </div>
// //             </div>
// //             <div>
// //                 <About />
// //             </div>
// //             <div>
// //                 <Resume />
// //             </div>
// //             <div>
// //                 <Projects />
// //             </div>
// //             <div>
// //                 <Contacts />
// //             </div>
// //         </div>
// //     )
// // }

// // export default Home;

// import React from 'react';
// import './Home.scss';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="home-content">
//         <h2>Hi</h2>
//         <h1>
//           I'm <span className="name-highlight">Hannah</span>
//           <br />
//           a Frontend Developer
//         </h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
//           dolorem cum laudantium, unde voluptatum nemo non exercitationem neque
//           ab delectus voluptas asperiores architecto ad eveniet molestiae
//           provident harum pariatur porro.
//         </p>
//         <div className="home-buttons">
//           <button className="black-button">Studio</button>
//           <button className="red-button">Experience</button>
//         </div>
//       </div>
//       <div className="home-image">
//         <img src="./components/assets/tech-girlie.png" alt="Hannah" />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Hi</h2>
        <h1>
          I'm <span className="name-highlight">Enoch Kibet</span>
          <br />
          a Frontend Developer
        </h1>
        <p>
        I'm a tech enthusiast with a passion for creativity and problem-solving. Whether crafting elegant front-end designs or diving into backend architecture, I thrive on bringing ideas to life in the digital realm.
        Join me as we conquer the binary jungle together, one line of code at a time!
        </p>
        <div className="home-buttons">
          <button className="black-button">Resume </button>
          <button className="red-button">Projects </button>
        </div>
      </div>
      <div className="home-image">
        <img 
          src="https://media.istockphoto.com/id/614736586/photo/father-and-son-using-virtual-reality-glasses-sitting-outside.webp?b=1&s=612x612&w=0&k=20&c=yucpBrMqOi35r06XYY9MYGAJZfJmfnH00yFY8zB0EEc=" 
          alt="Enoch Kibet" 
        />
      </div>
    </div>
  );
};

export default Home;
