import ReactDOM from "react-dom/client";
import React from "react";
import Black_Sig from "./imgs/Black_Sig.png";
import Github from "./imgs/Github.png";
import LinkedIn from "./imgs/LinkedIn.png";
// import Nav from "./imgs/lines.png";
import Postgresql from './imgs/PSQL.png';
import nodejs from './imgs/nodejs.png';
import html from './imgs/html.png';
import css from './imgs/css.png';
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
          <section className='navFormat'>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
          </section>
        </nav>
      <div className='sideBar'>
        <a href='https://github.com/Carlie16604' target='_blank'>
          <img src={Github} className='logo-setting' alt="Github"/>
        </a>
        <a href='https://www.linkedin.com/in/carlie-malone23/' target='_blank'>
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
                <img src={html} className='logo-space' alt='html logo' />
                <img src={css} className='logo-space' alt='css logo' />
                <img src={JS} className='logo-space' alt='JS logo' />
                <img src={Postgresql} className='logo-space' alt='PostgresQL logo' />
                <img src={React_logo} className='logo-space' alt='react logo' />
                <img src={nodejs} className='logo-space' alt='node.js logo' />
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