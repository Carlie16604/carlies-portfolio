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
                        <img src={mail} className='logo-setting' alt='Mail PNG' />
                            <div className='cont-info'>
                                <p>Email:</p>
                                <a className='email' href='mailto:carliemaloneco@gmail.com'>carliemaloneco@gmail.com</a>
                            </div>
                    {/* <p>Location: Broomfield, CO?</p> */}
                </div>
            </section>
        </>
    )
}

export default Contact