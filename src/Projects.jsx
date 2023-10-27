import React from 'react';
import capstone from './imgs/capstone.png';
import './Projects.css';
import github from './imgs/Github.png';
import preview from './imgs/preview.png';

const Projects = () => {
    return (
        <section id='projects' className='projects'>
            <div className='port-container'>
                <div className='project-content'>
                    <p className='portfolio-title'>Portfolio</p>
                    <h3>Here's a look at some of my work!</h3>
                    <div className='projects-grid'>
                        <div className='pro pro__1'>
                            <a href='https://black-market-50e6.onrender.com' target='_blank'> 
                                <img src={capstone} className='pro__img' alt='capstone pro'/>
                            </a>
                            <div className='pro__text'>
                                <h3>The Black Market 
                                    <span className='date-class'>(October 2023)</span>
                                </h3>
                                    <p id='description'>
                                        <li>Worked closely with a diverse team of 4, collaborating on all aspects of the project including project planning, design, development and deployment.</li><br/>
                                        <li>Responsible for verification, importing & exporting, routes, front & backend debugging, etc.</li><br/>
                                        <li>Played a pivotal role in building the platform, contributing to the frontend using React.js and backend utilizing Node.js, demonstrating proficiency in flil-stack development.</li><br/>
                                        <li>Excelled in communication, database management, project board, tasks management, human-computer interactions.</li><br/>
                                    </p>
                                <div className='stack'>
                                    <p>FullStack Application</p>
                                </div>
                                <div className='links'>
                                    <a href='https://github.com/team-black-market/Capstone-Project' target='_blank'>
                                        <img src={github} className='pro-setting' title='See the code' alt='github icon'/>
                                        <p>The Code</p>
                                    </a>
                                    <a href='https://black-market-50e6.onrender.com/' target='_blank'>
                                        <img src={preview} className='pro-setting' title='View the Website' alt='preview icon'/>
                                        <p>Live Demo</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;