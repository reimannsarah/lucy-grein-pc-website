import LucyBubba from '../../assets/imgs/LucyBubba.png';
import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  return (
    <div>
      <div>
        <div className="top-div">
          <img src={LucyBubba} />
          <h1 id="title">Hi, I'm Lucy</h1>
          <div className="blank"></div>
          <p id="intro">I am a parent Consultant and I'm here to make parenting feel <strong>accessible</strong>, <strong>functional</strong>, and <strong>intuitive</strong></p>
        </div>
      </div>
      <div className="boxes">
        <div className="parent-box">
          <Link to="/bio" className="box1">
            <div>
              <p className="box-title">Bio</p>
            </div>
          </Link>
          <div className="box2">
            <p className="quote">Working with families is my passion</p>
          </div>
        </div>

        <div className="parent-box">
          <Link to="/services" className="box1" >
            <div className="box1">
              <p className="box-title">Programs</p>
            </div>
          </Link>
          <div className="box2">
            <p className="quote">I believe parents deserve support and collaboration</p>
          </div>
        </div>

        <div className="parent-box">
          <Link to="/intuition-theory" className="box1" >
            <div className="box1">
              <p className="box-title">Intuition Theory</p>
            </div>
          </Link>
          <div className="box2">
            <p className="quote">Intuition is a complex system of values, perception, and memory</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;