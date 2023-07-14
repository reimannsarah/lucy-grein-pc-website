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
      <div className="boxes">
          <div className="box1">
            <p>lorem ipsum</p>
          </div>
          <div className="box2">
            <p>lorem ipsum</p>
          </div>
        
        {/* <div className="box1">
          <p>lorem ipsum</p>
        </div>
        <div className="box2">
          <p>lorem ipsum</p>
        </div>
        <div className="box1">
          <p>lorem ipsum</p>
        </div>
        <div className="box2">
          <p>lorem ipsum</p>
        </div> */}
      </div>

    </div>
  )
}

export default Home;