import logo from './../../assets/imgs/LucyLogo.png';
import './LandingPage.css'
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <h1>Lucy Grein</h1>
        <h2>Parent Consultant</h2>
      </div>
      <div>
        <nav>
            <Link to='/journey'>Take The Journey</Link>
            <Link to='/'>Explore On My Own</Link>
        </nav>
      </div>
    </div>
  )
}

export default LandingPage;