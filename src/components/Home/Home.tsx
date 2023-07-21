import LucyBubba from '../../assets/imgs/LucyBubba.png';
import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  return (
    <div>
      <div>
        <img className="pic" src={LucyBubba} />
        <h3>Hi, I'm Lucy</h3>
        <p>I am a parent Consultant and I'm here to make parenting feel accessible, functional, and intuitive</p>
      </div>
      <div className="boxes">
        <div className="parent-box">
          <Link to="/about" className="box1">
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