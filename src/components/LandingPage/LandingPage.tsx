import logo from './../../assets/imgs/LucyLogo.png';
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const handleExploreClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="landing-page">
      <div className="logo-title">
        <img src={logo} alt="logo" />
        <h1>Lucy Grein</h1>
        <p>Parent Consultant</p>
      </div>
      <div className="buttons">
        <nav>
            <button onClick={() => handleExploreClick('/journey')}>Take The Journey</button>
            <button onClick={() => handleExploreClick('/home')} >Explore On My Own</button>
        </nav>
      </div>
    </div>
  )
}

export default LandingPage;