import logo from './../../assets/imgs/LucyLogo.png';
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const handleExploreClick = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <h1>Lucy Grein</h1>
        <h2>Parent Consultant</h2>
      </div>
      <div>
        <nav>
            <button onClick={() => handleExploreClick('/journey')}>Take The Journey</button>
            <button onClick={() => handleExploreClick('/home')} >Explore On My Own</button>
        </nav>
      </div>
    </div>
  )
}

export default LandingPage;