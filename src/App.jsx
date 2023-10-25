import ReactDOM from "react-dom/client";
import React from "react";
import White_Sig from "./imgs/White_Sig.png";
import Github from "./imgs/Github.png";
import LinkedIn from "./imgs/LinkedIn.png";
import Nav from "./imgs/lines.png";
import './App.css';
import Home from './Home.jsx';
import './Home.css';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import AboutMe from './AboutMe';

function App() {
    return (
      <>
        <nav className='navBar'>
          <img src={White_Sig} className="App-logo" alt="White Signature" />
        </nav>
        <p className='contact'>CONTACT</p>
        <div className='sideBar'>
          {/* Dropdown menu here?*/}
            <img className='logo-size' src={Nav} alt="Nav" />
          <a href='https://github.com/Carlie16604'>
            <img src={Github} className='logo-setting' alt="Github"/>
          </a>
          <a href='https://www.linkedin.com/in/carlie-malone23/'>
            <img src={LinkedIn} className='logo-setting' alt="LinkedIn" />
          </a>
        </div>
        <Home />
      </>
    );
  };

export default App;