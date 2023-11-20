import React from "react";
import './App.scss';
import './Projects.scss';
import './sun-and-moon.scss';
import Black_Sig from "./imgs/Black_Sig.png";
import White_Sig from "./imgs/White_Sig.png";
import Gray_Sig from "./imgs/Gray_Sig.png";
// import Github from "./imgs/Github.png";
import GitHub from './imgs/github.svg';
import LinkedIn from './imgs/linkedin.svg';
// import LinkedIn from "./imgs/LinkedIn.png";
import Postgresql from './imgs/PSQL.png';
import nodejs from './imgs/nodejs.png';
import html from './imgs/html.png';
import css from './imgs/css.png';
import React_logo from './imgs/React-icon.svg.png';
import selfie from './imgs/selfie.png';
import JS from './imgs/JavaScript-logo.png';
import Sass from './imgs/sass.png';
import Titles from './Titles.jsx';
import About from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import SunAndMoon from './sun-and-moon.jsx';

function App() {
// something to do with the storage key?
  // const storageKey = 'theme-preference'

  const onClick = () => {
    theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'
  
    setPreference()
  }
  
  const getColorPreference = () => {
    // if (localStorage.getItem(storageKey))
    //   return localStorage.getItem(storageKey)
    // else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  }
  
  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
  }
  
  const reflectPreference = () => {
    document.firstElementChild
      .setAttribute('data-theme', theme.value)
  
    document
      .querySelector('#theme-toggle')
      ?.setAttribute('aria-label', theme.value)
  }
  
  const theme = {
    value: getColorPreference(),
  }
  
  reflectPreference()
  
  window.onload = () => {
    reflectPreference()
  
    document
      .querySelector('#theme-toggle')
      .addEventListener('click', onClick)
  }
  
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({matches:isDark}) => {
      theme.value = isDark ? 'dark' : 'light'
      setPreference()
    })

  // function scrollToSection(id) {
  //   window.scroll({
  //     top: document.useRef(id),
  //     //fix this
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // used for transitions between sections, come back to this

    return (
      <>
      <div id='root'>
        <nav>
          {/* <img src={Black_Sig} className='App-logo' alt='Black Signature' /> */}
          {/* Add a UseState to change the light vs dark sig */}
          {/* <img src={theme.value === 'light' ? Black_Sig : White_Sig} className="App-logo" alt="Signature" /> */}
          <img src={Gray_Sig} className="App-logo" alt="Signature" />
          <section className='navFormat'>
            <SunAndMoon />
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
          </section>
        </nav>
      <div className='sideBar'>
        <a href='https://github.com/Carlie16604' target='_blank'>
          <img src={GitHub} className='logo-setting' alt="Github"/>
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
                <p>Hey, I'm Carlie. I'm a software engineer / fullstack developer with an eye for style. I implement seamless applications and excellent user interface.</p>
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
export default App;