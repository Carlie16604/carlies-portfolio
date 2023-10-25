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
import Home from './Home.jsx';
import './Home.css';
// import About from './AboutMe.jsx';
import selfie from './imgs/selfie.png';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import AboutMe from './AboutMe';

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
        <nav className='navBar'>
          <img src={Black_Sig} className="App-logo" alt="Black Signature" />
        {/* <button id="theme-toggle">Click Me!</button> */}
            {/* <img className='logo-size' src={Nav} alt="Nav" /> */}
        </nav>
        <p className='contact'>CONTACT</p>
        <div className='sideBar'>
          <a href='https://github.com/Carlie16604'>
            <img src={Github} className='logo-setting' alt="Github"/>
          </a>
          <a href='https://www.linkedin.com/in/carlie-malone23/'>
            <img src={LinkedIn} className='logo-setting' alt="LinkedIn" />
          </a>
        </div>
        <Home />
        <div className='about'>
          <p>My name is Carlie. I'm a software engineer / fullstack developer with an eye for style.</p>
          <p>With my psychology degree, I implement seemless applications and excellent user interface.</p>
          <p>Denver, CO</p>
        </div>
        <p className='techstack'>Tech Stack | 
          <img src={Postgresql} className='logo-setting' alt='PostgresQL logo' />
          <img src={JS} className='logo-setting' alt='JS logo' />
          <img src={React_logo} className='logo-setting' alt='react logo' />
          <img></img>
        </p>
        <img src={selfie} className='selfie' alt='selfie'/>
      </>
    );
  };

export default App;