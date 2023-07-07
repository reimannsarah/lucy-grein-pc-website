import logo from './../assets/LucyLogo.png';
import { Link } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu';
// import { useMediaQuery } from 'react-responsive';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/"><img src={logo} className="logo"></img></Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default NavBar;
