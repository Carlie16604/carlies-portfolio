import React from 'react';
import mail from './imgs/mail.svg';
import LinkedIn from './imgs/linkedin.svg';
import './scss/contact.scss';

const Contact = () => {
    return (
        <>
            <div id='contact' className='contact'>
                <div className='containerContact'> 
                    <div className='cont-content'>
                        <div className='cont-title'>
                            <p>Contact</p>
                            <h3>Feel free to reach out to me!</h3>
                        </div>
                        <div className='cont-icons'>
                            <img src={mail} className='cont-logo-setting' alt='Mail svg' />
                                <div className='cont-info'>
                                    <a className='portal' href='mailto:carliemaloneco@gmail.com'>carliemaloneco@gmail.com</a>
                                </div>
                            <img src={LinkedIn} className='cont-logo-setting' alt='LinkedIn svg' />
                                <div className='cont-info'>
                                    <a className='portal' href='https://www.linkedin.com/in/carlie-malone23/' target='_blank'>Carlie Malone</a>
                                </div>
                            {/* <img src={GitHub} className='cont-logo-setting' alt='GitHub PNG' /> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact