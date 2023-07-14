import LucyBubba from '../../assets/imgs/LucyBubba.png';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <img className="pic" src={LucyBubba} />
        <h3>Hi, I'm Lucy</h3>
        <p>I am a parent Consultant and I'm here to make parenting feel accesible, functional, and intuitive</p>
      </div>
      <div className="box-container">

        <div className="boxes">

          <svg className="box1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
            <rect width="200" height="200" />
          </svg>

          <svg className="box2" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
            <rect width="200" height="200" />
          </svg>

        </div>

        <div className="boxes">

          <svg className="box1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
            <rect width="200" height="200" />
          </svg>

          <svg className="box2" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
            <rect width="200" height="200" />
          </svg>

        </div>
        
        <div className="boxes">

          <svg className="box1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
            <rect width="200" height="200" />
          </svg>

          <svg className="box2" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
            <rect width="200" height="200" />
          </svg>

        </div>

      </div>

    </div>
  )
}

export default Home;