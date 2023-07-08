import LucyBubba from '../../assets/imgs/LucyBubba.png';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <img src={LucyBubba} />
        <h3>Hi, I'm Lucy</h3>
        <p>I am a parent Consultant and I'm here to make parenting feel accesible, functional, and intuitive</p>
      </div>
      <svg  className="box" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <rect width="100" height="100" />
      </svg>

    </div>
  )
}

export default Home;