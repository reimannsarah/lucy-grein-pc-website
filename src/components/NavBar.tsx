import logo from './../assets/imgs/LucyLogo.png';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
// import { slide as Menu } from 'react-burger-menu';
// import { useMediaQuery } from 'react-responsive';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/about" className="navbar-link" id="about-nav">About</Link>
      <Link to="/services" className="navbar-link" id="services-nav">Services</Link>
      <Link to="/" className="navbar-links"><img src={logo} className="logo"></img></Link>
      <Link to="/projects" className="navbar-link" id="projects-nav">Projects</Link>
      <Link to="/contact" className="navbar-link" id="contact-nav">Contact</Link>
    </nav>
  )
}

export default NavBar;
