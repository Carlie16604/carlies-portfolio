import React from 'react';
import './scss/Main.scss';
import './scss/sun-and-moon.scss';
import GitHub from './imgs/github.svg';
import LinkedIn from './imgs/linkedin.svg';
import selfie from './imgs/Carliee.jpg';
import Titles from './Titles.jsx';
import About from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import NavBar from './NavBar.jsx';

function App() {

    return (
      <>
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
                  <img
                    src={
                      theme === 'light'
                        ? 'https://skillicons.dev/icons?i=react,dotnet&theme=light'
                        : 'https://skillicons.dev/icons?i=react,dotnet'
                    }
                    alt='react & dotnet logo'
                    title='React and DotNet'
                  />
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
    </>
  ) 
}
export default App;