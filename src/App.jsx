import ReactDOM from "react-dom/client";
import React from "react";
import Black_Sig from "./imgs/Black_Sig.png";
import './App.css'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import AboutMe from './AboutMe';

function App() {
    return (
      <div>
        <nav className='navBar'>
        <img src={Black_Sig} className="App-logo" alt="Black Signature" />
          <p>About Me</p>
          <p>Projects</p>
          <p>Contact</p>
        </nav>
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    );
  };

export default App;