import React from 'react';
import mail from './imgs/mail.png';
import './contact.css';
import './About.css';

const Contact = () => {
    return (
        <>
            <section id='contact' className='contact'>
                <div className='cont-container'> 
                    <h1 className='cont-title'>Contact</h1>
                        <h3>Feel free to reach out to me!</h3>
                            <div className='cont-info'>
                                <img src={mail} className='logo-setting' alt='Mail PNG' />
                                <p>Email: carliemaloneco@gmail.com</p>
                            </div>
                    {/* <p>Location: Broomfield, CO?</p> */}
                </div>
            </section>
        </>
    )
}

export default Contact