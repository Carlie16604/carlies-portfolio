import React from 'react';
import capstone from './imgs/capstone.png';
import selfie from './imgs/Carliee.jpg';
import './scss/Projects.scss';
import github from './imgs/github.svg';
import rocketship from './imgs/RocketLaunch.svg';

const Projects = () => {
    return (
        <section id='projects' className='projects'>
            <div className='container2'>
                <div className='project-content'>
                    <p className='portfolio-title'>Portfolio</p>
                    <h3 className='port-intro'>Take a look at some of my work!</h3>
                    <div className='projects-grid'>
                        <div className='pro pro__1'>
                            <a href='https://black-market-50e6.onrender.com' target='_blank' rel='noreferrer'> 
                                <img src={capstone} className='pro__img' alt='capstone pro'/>
                            </a>
                            <div className='pro__text'>
                                <h3>The Black Market 
                                    <span className='date-class'>(October 2023)</span>
                                </h3>
                                    <p id='description'>
                                        <p className='desc1'>This project is a real world example of an e-commerce website. Feel free to login and explore the features!</p>
                                        <p className='desc2'>USERNAME: ethyl</p>
                                        <p className='desc2'>PASSWORD: 1234</p>
                                        <li className='bullets'>Worked closely with a diverse team of 4 with a 2-week dealine, collaborating on all aspects of the project including project planning, design, development and deployment.</li><br/>
                                        <li className='bullets'>Responsible for verification, importing & exporting, routes, front & backend debugging, etc.</li><br/>
                                        <li className='bullets'>Played a pivotal role in building the platform, contributing to the frontend using React.js and backend utilizing Node.js, demonstrating proficiency in full-stack development.</li><br/>
                                        <li className='bullets'>Excelled in communication, database management, project board, tasks management, human-computer interactions.</li><br/>
                                    </p>
                                <div className='links'>
                                    <a href='https://github.com/team-black-market/Capstone-Project' target='_blank' rel='noreferrer'>
                                        <img src={github} className='pro-setting' title='See the code' alt='github icon'/>
                                        <p>The Code</p>
                                    </a>
                                    <a href='https://black-market-50e6.onrender.com/' target='_blank' rel='noreferrer'>
                                        <img src={rocketship} className='pro-setting' title='View the Website' alt='preview icon'/>
                                        <p>Live Demo</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projects-grid'>
                        <div className='pro pro__1'>
                            <a href='https://carlie-malone.netlify.app/' target='_blank' rel='noreferrer'>
                                <div className='pro__img'>
                                    <img className='pro_selfie' src={selfie} alt='selfie'/>
                                </div>
                            </a>
                            <div className='pro__text'>
                            <h3>My Portfolio! 
                                <span className='date-class'>(November 2023)</span>
                            </h3>
                                <p id='description'>
                                    <p className='desc2'>Solo Developer</p>
                                    <li className='bullets'>This project is focused on UI development in combination of both software development and psychology for excellent user experience.</li><br/>
                                    <li className='bullets'>Presents current & completed projects as well as demonstrating skills in developing a real world application for clients.</li><br/>
                                    <li className='bullets'>Excelled with the art of prompt engineering & refined skills with design, React, Vite, and debugging.</li><br/>
                                    <li className='bullets'>Learned new language, SCSS.</li><br/>
                                </p>
                            <div className='links'>
                                <a href='https://github.com/Carlie16604/carlies-portfolio' target='_blank' rel='noreferrer'>
                                    <img src={github} className='pro-setting' title='See the code' alt='github icon'/>
                                    <p>The Code</p>
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