import logo from '../../assets/imgs/LucyLogo.png';
import { Link } from 'react-router-dom';
import './NavBar.css'
// import { slide as Menu } from 'react-burger-menu';
// import { useMediaQuery } from 'react-responsive';

function NavBar() {
  return (
    <nav className="navbar">

      <div className="dropdown">
        <Link to="/about" className="navbar-link" id="about-nav">About</Link>
        <div className="dropdown-content" id="about-menu">
          <Link to="/bio">Bio</Link>
          <Link to="/values">Values</Link>
        </div>
      </div>

      <div className="dropdown">
        <Link to="/services" className="navbar-link" id="services-nav">Services</Link>
        <div className="dropdown-content" id="services-menu">
          <Link to="/programs">Programs</Link>
          <Link to="/testimony">Testimoy</Link>
          <Link to="/FAQ">FAQ</Link>
        </div>
      </div>

      <Link to="/home" className="navbar-links"><img src={logo} className="logo"></img></Link>

      <div className="dropdown">
        <Link to="/projects" className="navbar-link" id="projects-nav">Projects</Link>
        <div className="dropdown-content" id="projects-menu">
          <Link to="/essays">Essays</Link>
          <Link to="/intuition-theory">Intuition Theory</Link>
        </div>
      </div>

      <div className="dropdown">
        <Link to="/contact" className="navbar-link" id="contact-nav">Contact</Link>
        <div className="dropdown-content" id="contact-menu">
          <Link to="/something">Something</Link>
        </div>
      </div>

    </nav>
  )
}

export default NavBar;
