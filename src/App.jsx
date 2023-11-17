import React from "react";
import './App.scss';
import './Projects.scss';
import './Mode.scss';
import Black_Sig from "./imgs/Black_Sig.png";
import Github from "./imgs/Github.png";
import LinkedIn from "./imgs/LinkedIn.png";
import Postgresql from './imgs/PSQL.png';
import nodejs from './imgs/nodejs.png';
import html from './imgs/html.png';
import css from './imgs/css.png';
import React_logo from './imgs/React-icon.svg.png';
import selfie from './imgs/selfie.png';
import JS from './imgs/JavaScript-logo.png';
import Titles from './Titles.jsx';
import About from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Mode from './Mode.jsx';
import Sass from './imgs/sass.png';

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
  // function scrollToSection(id) {
  //   window.scroll({
  //     top: document.useRef(id),
  //     //fix this
  //     left: 0,
  //     behavior: 'smooth',
  //   });

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
              <Mode />
              <button className="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite">
                <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                  <mask className="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="24" cy="10" r="6" fill="black" />
                  </mask>
                  <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                  <g className="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </g>
                </svg>
              </button>
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
      <div id='home' className='home'>
        <div className='container'>
          <div className='content'>
            <div className='port-main'>
              <div className='port-text'>
                <Titles />
                <p>Hey, I'm Carlie. I'm a software engineer / fullstack developer with an eye for style. I implement seemless applications and excellent user interface.</p>
                <p>📍 Denver, CO</p>
                </div>
              <img className='selfie' src={selfie} alt='selfie'/>
            </div>
            <div className='techStack'>
              <p>Tech Stack |</p>
                <img src={html} className='logo-space' title='HTML' alt='html logo' />
                <img src={css} className='logo-space' title='CSS' alt='css logo' />
                <img src={JS} className='logo-space' title='JavaScript' alt='JS logo' />
                <img src={Postgresql} className='logo-space' title='Postgresql' alt='PostgresQL logo' />
                <img src={React_logo} className='logo-space' title='React' alt='react logo' />
                <img src={nodejs} className='logo-space' title='Node.js' alt='node.js logo' />
                <img src={Sass} className='logo-space' title='Sass' alt='Sass logo' />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
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