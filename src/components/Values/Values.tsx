import LucyBubba from '../../assets/imgs/LucyBubba.png';
import './Values.css'

function Values() {
  return (
    <div>
      <div className="values-top-div">
        <h1>Values and Philosophies</h1>
        <p>My core values have been shaped by life experience. I prioritize
          these things in all ways by which I move through the world.
          My philosophies of engagement are informed by my various
          forms of training and education. They are how I work with
          children and connect with families effectively.
          My website has written descriptions of each value and
          philosophy. </p>
        <img src={LucyBubba} alt="lu and bub" />
      </div>
      <div className="core-values">
        <p>Community</p>
        <p>Resilience</p>
        <p>Communication</p>
        <p>Connection</p>
        <p>Comfort</p>
        <p>Self-Reflection</p>
        <p>Creatvity</p>
        <p>Responsibility</p>
        <p>Accessibility</p>
      </div>
      <div className="philosophies">
        <p>Boundaries create freedom</p>
        <p>Trial and error</p>
        <p>Learning happens in discomfort</p>
        <p>Happt</p>
      </div>
    </div>
  )
}

export default Values;