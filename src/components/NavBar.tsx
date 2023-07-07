import logo from './../assets/LucyLogo.png';
import { Link } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu';
// import { useMediaQuery } from 'react-responsive';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/about" className="navbar-link">About</Link>
      <Link to="/services" className="navbar-link">Services</Link>
      <Link to="/" className="navbar-links"><img src={logo} className="logo"></img></Link>
      <Link to="/projects" className="navbar-link">Projects</Link>
      <Link to="/contact" className="navbar-link">Contact</Link>
    </nav>
  )
}

export default NavBar;
