import beach from '../../assets/imgs/beach.png';
import './Values.css'

function Values() {
  return (
    <div>
      <div className="values-top-div">

        <div className="values-title-text">
          <h1 id="values-title">Values & Philosophies</h1>
          <p>My core values have been shaped by life experience. I prioritize
            these things in all ways by which I move through the world.
            My philosophies of engagement are informed by my various
            forms of training and education. They are how I work with
            children and connect with families effectively.
            My website has written descriptions of each value and
            philosophy. </p>
        </div>

        <img id="beach" src={beach} alt="lu and bub" />
      </div>
        <div className="core-values-title"><h1>Core Values</h1></div>
      <div className="core-values">
        <div>
          <p>Community</p>
          <p>Resilience</p>
          <p>Communication</p>
        </div>
        <div>
          <p>Connection</p>
          <p>Comfort</p>
          <p>Self-Reflection</p>
        </div>
        <div>
          <p>Creativity</p>
          <p>Responsibility</p>
          <p>Accessibility</p>
        </div>
      </div>
      <div className="philosophies">
        <p>Boundaries create freedom</p>
        <p>Trial and error</p>
        <p>Learning happens in discomfort</p>
        <p>Happy, healthy, and safe</p>
        <p>All experiences are internalized</p>
        <p>Centering the self allows for effective assessment</p>
      </div>
    </div>
  )
}

export default Values;