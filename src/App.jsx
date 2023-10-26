import ReactDOM from "react-dom/client";
import React from "react";
import Black_Sig from "./imgs/Black_Sig.png";
import Github from "./imgs/Github.png";
import LinkedIn from "./imgs/LinkedIn.png";
// import Nav from "./imgs/lines.png";
import Postgresql from './imgs/PSQL.png';
import React_logo from './imgs/React-icon.svg.png';
import JS from './imgs/JavaScript-logo.png';
import './App.css';
import Home from './Titles.jsx';
// import About from './AboutMe.jsx';
import selfie from './imgs/selfie.png';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './AboutMe.jsx';

function App() {
  // const toggleButton = document.querySelector('#theme-toggle');
  // const body = document.querySelector('body');

  //  toggleButton.addEventListener('click', () => {
  //   if (body.classList.contains('dark-mode')) {
  //     body.classList.remove('dark-mode');
  //   } else {
  //     body.classList.add('dark-mode');
  //   }
  // });

    return (
      <>
      <div id='root'>
        <nav>
          <img src={Black_Sig} className="App-logo" alt="Black Signature" />
          <section>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </section>
        </nav>
      <div className='sideBar'>
        <a href='https://github.com/Carlie16604'>
          <img src={Github} className='logo-setting' alt="Github"/>
        </a>
        <a href='https://www.linkedin.com/in/carlie-malone23/'>
          <img src={LinkedIn} className='logo-setting' alt="LinkedIn" />
        </a>
      </div>
      <div id='home' className='media'>
        <div className='container'>
          <div className='content'>
            <div className='port-main'>
              <div className='port-text'><Home /><br/><br/>
              {/* dont leave the breaks here lol */}
                <p>Hey, I'm Carlie. I'm a software engineer / fullstack developer with an eye for style. With my psychology degree, I implement seemless applications and excellent user interface.</p>
                <p>📍 Denver, CO</p>
                </div>
              <img className='selfie' src={selfie} alt='selfie'/>
            </div>
            <div className='techStack'>
              <p>Tech Stack |</p>
                <img src={Postgresql} className='logo-setting' alt='PostgresQL logo' />
                <img src={JS} className='logo-space' alt='JS logo' />
                <img src={React_logo} className='logo-setting' alt='react logo' />
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
    </>
  )
}














//       <div className='grid'>
//         <nav className='navBar'>
//           <img src={Black_Sig} className="App-logo" alt="Black Signature" />
//         {/* <button id="theme-toggle">Click Me!</button> */}
          //  <img className='logo-size' src={Nav} alt="Nav" />
//         </nav>
//         <p className='contact'>CONTACT</p>
//         <Home />
//         <div className='about'>
//           <br/>
//         </div>
//         <p className='techstack'>Tech Stack | 
//           <img></img>
//         </p>
//         <img src={selfie} className='selfie' alt='selfie'/>
//       </div>
//       </>
//     );
//   };

export default App;