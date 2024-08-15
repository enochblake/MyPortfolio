// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact'
// import { Routes, Route } from 'react-router-dom';
// import Resume from './components/Resume';

// function App() {
//   return (
//     <div className="App h-full pb-1">
//      <NavBar />
//      <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/resume" element={<Resume />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/contact" element={<Contact />} />
//      </Routes>
//     </div>
//   );
// }

// export default App;

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App h-full pb-1">
     <NavBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contacts />} />
     </Routes>
    </div>
  );
}

export default App;