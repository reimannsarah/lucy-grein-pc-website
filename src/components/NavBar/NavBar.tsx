import logo from '../../assets/imgs/LucyLogo.png';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import React from 'react';


function NavBar() {
  const [activeAboutDropDown, setActiveAboutDropDown] = useState(false);
  const [activeServicesDropDown, setActiveServicesDropDown] = useState(false);
  const [activeProjectsDropDown, setActiveProjectsDropDown] = useState(false);
  const [activeContactDropDown, setActiveContactDropDown] = useState(false);
  const nodeRef = React.useRef(null);

  function handleAboutEnter() {
    setActiveAboutDropDown(true);
  }

  function handleAboutLeave() {
    setActiveAboutDropDown(false);
  }

  function handleServicesEnter() {
    setActiveServicesDropDown(true);
  }

  function handleServicesLeave() {
    setActiveServicesDropDown(false);
  }

  function handleProjectsEnter() {
    setActiveProjectsDropDown(true);
  }

  function handleProjectsLeave() {
    setActiveProjectsDropDown(false);
  }

  function handleContactEnter() {
    setActiveContactDropDown(true);
  }

  function handleContactLeave() {
    setActiveContactDropDown(false);
  }
  
  return (
    <nav className="navbar">

      <div className='dropdown' onMouseEnter={handleAboutEnter}
        onMouseLeave={handleAboutLeave}>
        <Link to="/about" className="navbar-link" id="about-nav">About</Link>
        <CSSTransition nodeRef={nodeRef} in={activeAboutDropDown} timeout={300} classNames="transition" unmountOnExit>

          <div className="dropdown-content" id="about-menu">
            <Link to="/bio">Bio</Link>
            <Link to="/values">Values</Link>
          </div>
        </CSSTransition>
      </div>

      <div className="dropdown" onMouseEnter={handleServicesEnter}
        onMouseLeave={handleServicesLeave}>
        <Link to="/services" className="navbar-link" id="services-nav">Services</Link>

        <CSSTransition nodeRef={nodeRef} in={activeServicesDropDown} timeout={300} classNames="transition" unmountOnExit>
          <div className="dropdown-content" id="services-menu">
            <Link to="/programs">Programs</Link>
            <Link to="/testimony">Testimoy</Link>
            <Link to="/FAQ">FAQ</Link>
          </div>
        </CSSTransition>
      </div>

      <Link to="/home" className="navbar-links"><img src={logo} className="logo"></img></Link>

      <div className="dropdown" onMouseEnter={handleProjectsEnter}
        onMouseLeave={handleProjectsLeave}>
        <Link to="/projects" className="navbar-link" id="projects-nav">Projects</Link>

        <CSSTransition nodeRef={nodeRef} in={activeProjectsDropDown} timeout={300} classNames="transition" unmountOnExit>
          <div className="dropdown-content" id="projects-menu">
            <Link to="/essays">Essays</Link>
            <Link to="/intuition-theory">Intuition Theory</Link>
          </div>
        </CSSTransition>
      </div>

      <div className="dropdown" onMouseEnter={handleContactEnter}
        onMouseLeave={handleContactLeave}>
        <Link to="/contact" className="navbar-link" id="contact-nav">Contact</Link>

        <CSSTransition nodeRef={nodeRef} in={activeContactDropDown} timeout={300} classNames="transition" unmountOnExit>
          <div className="dropdown-content" id="contact-menu">
            <Link to="/something">Something</Link>
          </div>
        </CSSTransition>
      </div>

    </nav>
  )
}

export default NavBar;
