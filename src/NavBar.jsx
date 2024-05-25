import React, { useState } from 'react';
import './scss/NavBar.scss';
import SunAndMoon from './sun-and-moon.jsx';
import Gray_Sig from "./imgs/Gray_Sig.png";

function NavBar() {
    const [mobileNav, setMobileNav] = useState(false);
    const [sticky, setSticky] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
      };

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
        <nav className='navbar'>
          <img onClick={scrollToTop} src={Gray_Sig} className="logo-img" alt="Signature" />
          <div className='nav-space'>
            <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
              <div className='nav-links'>
                <SunAndMoon />
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
              </div>
              <div className='hamburger-menu'>
                <span onClick={toggleMobileNav} className="hamburger-hamb">☰</span>
              </div>
            </div>
          </div>
        </nav>
        <div className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}>
          <span onClick={toggleMobileNav} className="x-mobile" alt="Close">x</span>
          <div className="mobile-links">
            <a onClick={toggleMobileNav} href="#home">Home</a>
            <a onClick={toggleMobileNav} href="#about">About</a>
            <a onClick={toggleMobileNav} href="#projects">Projects</a>
            <a onClick={toggleMobileNav} href="#contact">Contact</a>
          </div>
        </div>
      </>
    );
  };

export default NavBar;