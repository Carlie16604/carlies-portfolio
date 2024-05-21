import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './scss/Main.scss';
import './scss/sun-and-moon.scss';
// import Gray_Sig from "./imgs/Gray_Sig.png";
import GitHub from './imgs/github.svg';
import LinkedIn from './imgs/linkedin.svg';
import selfie from './imgs/Carliee.jpg';
import Titles from './Titles.jsx';
import About from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
// import SunAndMoon from './sun-and-moon.jsx';
// import { IconX } from "@tabler/icons-react";
import NavBar from './NavBar.jsx';

function App() {
  // const [mobileNav, setMobileNav] = useState(false);

  //this stopped working
  // const storageKey = 'theme-preference'

  // const onClick = () => {
  //   theme.value = theme.value === 'light'
  //     ? 'dark'
  //     : 'light'
  
  //   setPreference()
  // }
  
  // const getColorPreference = () => {
  //   if (localStorage.getItem(storageKey))
  //     return localStorage.getItem(storageKey)
  //   else
  //     return window.matchMedia('(prefers-color-scheme: dark)').matches
  //       ? 'dark'
  //       : 'light'
  // }
  
  // const setPreference = () => {
  //   localStorage.setItem(storageKey, theme.value)
  //   reflectPreference()
  // }
  
  // const reflectPreference = () => {
  //   document.firstElementChild
  //     .setAttribute('data-theme', theme.value)
  
  //   document
  //     .querySelector('#theme-toggle')
  //     ?.setAttribute('aria-label', theme.value)
  // }
  
  // const theme = {
  //   value: getColorPreference(),
  // }
  
  // reflectPreference()
  
  // window.onload = () => {
  //   reflectPreference()
  
  //   document
  //     .querySelector('#theme-toggle')
  //     .addEventListener('click', onClick)
  // }
  
  // window
  //   .matchMedia('(prefers-color-scheme: dark)')
  //   .addEventListener('change', ({matches:isDark}) => {
  //     theme.value = isDark ? 'dark' : 'light'
  //     setPreference()
  //   })

    return (
      <>
        {/* <div className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}>
          <IconX onClick={setMobileNav} className="x-mobile" />
          <div className="mobile-links">
            <Link onClick={setMobileNav} to="#home">
              Home
            </Link>
            <Link onClick={setMobileNav} to="#about">
              About
            </Link>
            <Link onClick={setMobileNav} to="#projects">
              Projects
            </Link>
            <Link onClick={setMobileNav} to="#contact">
              Contact
            </Link>
          </div>
        </div>
      <nav className='nav'>
        <img src={Gray_Sig} className="App-logo" alt="Signature" />
        <section className='navFormat'>
          <SunAndMoon />
          <Link to="#home">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#contact">Contact</Link>
        </section>
      </nav> */}
      <NavBar />
      <div className='sideBar'>
        <a href='https://github.com/Carlie16604' target='_blank' rel='noreferrer'>
          <img src={GitHub} className='logo-setting' alt="Github"/>
        </a>
        <a href='https://www.linkedin.com/in/carlie-malone23/' target='_blank' rel='noreferrer'>
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
            <div className='skills'>
              <p>Tech Stack</p>
            <div>
              <ul>
                <li>
                  <img src="https://skillicons.dev/icons?i=html,css,ts" alt='html & css' title='HTML, CSS, and TypeScript'/>
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=js,nodejs,postgres" alt='javacript, nodejs, and Postgres' title='Javascript, Node.js, and Postgres'/>
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=postman,sass,figma" alt='Postman, Figma & Sass logo' title='Postman, SASS, and Figma' />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=react,dotnet" alt='react & dotnet logo' title='React and DotNet' />
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    {/* </div> */}
    </>
  ) 
}
export default App;