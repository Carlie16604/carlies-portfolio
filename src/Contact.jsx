import React from 'react';
import mail from './imgs/mail.png';
import './contact.css';
import './About.css';

const Contact = () => {
    return (
        <>
            <section id='contact' className='contact'>
                <div className='container'> 
                    <div className='cont-content'>
                        <div className='cont-title'>
                            <p>Contact</p>
                            <h3>Feel free to reach out to me!</h3>
                        </div>
                    <div className='cont-icons'>
                        <img src={mail} className='cont-logo-setting' alt='Mail PNG' />
                        <div className='cont-icon-box'>
                            <div className='cont-info'>
                                {/* <h3>Email:</h3> */}
                                <a className='email' href='mailto:carliemaloneco@gmail.com'>carliemaloneco@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* <p>Location: Broomfield, CO?</p> */}
            </div>
            </section>
        </>
    )
}

export default Contact