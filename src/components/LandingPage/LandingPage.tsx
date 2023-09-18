import logo from './../../assets/imgs/LucyLogo.png';
import './LandingPage.css'
// import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  // const navigate = useNavigate();
  // const handleExploreClick = (path: string) => {
  //   navigate(path);
  // };

  return (
    <div className="landing-page">
      <div className="logo-title">
        <img className="landing-logo" src={logo} alt="logo" />
        <h1 className="lucy-grein">Lucy Grein</h1>
        <p className="parent-consultant">Parent Consultant</p>
      </div>
      <div className="coming-soon">
        <h1>Website Coming Soon!</h1>
      </div>
      {/* <div>
        <nav  className="buttons">
            <button onClick={() => handleExploreClick('/journey')}>Take The Journey</button>
            <button onClick={() => handleExploreClick('/home')} >Explore On My Own</button>
        </nav>
      </div> */}
    </div>
  )
}

export default LandingPage;