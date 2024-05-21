import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './scss/NavBar.scss';
import SunAndMoon from './sun-and-moon.jsx';
import Gray_Sig from "./imgs/Gray_Sig.png";
import IconX from "./imgs/lines.png";

function NavBar() {
    const [mobileNav, setMobileNav] = useState(false);
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };

    window.addEventListener("scroll", handleScroll);

    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const storageKey = 'theme-preference'

  const onClick = () => {
    theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'
  
    setPreference()
  }
  
  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey)
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  }
  
  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
  }
  
  const reflectPreference = () => {
    document.firstElementChild
      .setAttribute('data-theme', theme.value)
  
    document
      .querySelector('#theme-toggle')
      ?.setAttribute('aria-label', theme.value)
  }
  
  const theme = {
    value: getColorPreference(),
  }
  
  reflectPreference()
  
  window.onload = () => {
    reflectPreference()
  
    document
      .querySelector('#theme-toggle')
      .addEventListener('click', onClick)
  }
  
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({matches:isDark}) => {
      theme.value = isDark ? 'dark' : 'light'
      setPreference()
    })

    return (
      <>
          <img src={IconX} onClick={() => setMobileNav(!mobileNav)} className="x-mobile" />
          <div className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}>
            <div className="mobile-links">
                <a href="#home">Home</a>
                <a href="#about">
                About
                </a>
                <a onClick={setMobileNav} href="#projects">
                Projects
                </a>
                <a onClick={setMobileNav} href="#contact">
                Contact
                </a>
                {/* <Link onClick={setMobileNav} to="#contact">
                Contact
                </Link> */}
            </div>
          </div>


        <nav className='navbar'>
        <Link href='#home'>
            <img onClick={scrollToTop} src={Gray_Sig} className="logo-img" alt="Signature" />
        </Link>
          <div className='nav-space'>
            <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <div className='nav-links'>
                <SunAndMoon />
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
                {/* <Link onClick={() => window.scrollTo(0, 0)} href='#contact'>
                    Contact
                </Link> */}
            </div>
            <div className='hamburger-menu'>
                <i onClick={() => setMobileNav(!mobileNav)} className="hamburger-hamb">
                </i>
            </div>
            </div>
          </div>
        </nav>
      </>
    );
}


{/* <section className='navFormat'>
    <SunAndMoon />
    <Link to="#home">Home</Link>
    <Link to="#about">About</Link>
    <Link to="#projects">Projects</Link>
    <Link to="#contact">Contact</Link>
</section> */}

export default NavBar;

