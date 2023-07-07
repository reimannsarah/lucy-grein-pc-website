import logo from './../assets/LucyLogo.png';
// import { slide as Menu } from 'react-burger-menu';
// import { useMediaQuery } from 'react-responsive';

function NavBar() {
  return (
    <nav className="navbar">
      <a>About</a>
      <a>Services</a>
      <img src={logo} className="logo"></img>
      <a>Projects</a>
      <a>Contact</a>
    </nav>
  )
}

export default NavBar;
