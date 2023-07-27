import './Programs.css'
import LucyLA from '../../assets/imgs/LucyLA.png';

function Programs() {
  return (
    <div>
      <div className="programs-top-div">
        <div className="programs-title-intro">
          <h1 className="programs-title">Services Offered</h1>
          <p className="programs-intro">All of my services, be that individual sessions or multi-month
            programs, are designed to support your needs. Before we begin
            working together, we will meet for a free 25-min consultation. I
            will use that conversation to create an individualized plan for
            your family that acknowledges its unique dynamic.</p>
        </div>
        <img className="lucyLA" src={LucyLA} alt="photo of lucy standing under a plant"></img>
      </div>

      <div className="program-info">
        <h2 className="parent-consulting-title">1:1 Parent Consulting</h2>
        <p>$90/session, sliding scale available</p>
        <p>60-min session, virtual or in-person</p>
        <p className="emphasis">Discover consistent and sustainable parenting practices.</p>
        <ul className="list">
          <li>Assess what's working and what's not working in your home.</li>
          <li>Center yourself, build effective tools</li>
          <li>Develop your parenting intuition</li>
        </ul>
      </div>

      <div className="program-info">
        <h2 className="parent-consulting-title">4-Week Problem Solving Program</h2>
        <p>$340 &#40;$85/session&#41;</p>
        <p>Four 60-min sessions, virtual or in-person</p>
        <p className="emphasis">Let's focus on the issue at hand and prepare for what's next.</p>
        <ul>
          <li>Gain problem solving tools to address current struggles</li>
          <li>Practice how to navigate, learn from, and move through your challenges</li>
          <li>Create a problem solving toolkit for future issues</li>
        </ul>
      </div>

      <div className="program-info">
        <h2 className="parent-consulting-title">12-Week Intuitive Parenting Program</h2>
        <p>$900 &#40;$75/session&#41;, sliding scale available</p>
        <p>One 90-min Mutual Understanding session, virtual or in-person</p>
        <p>Eleven 60-min sessions, virtual or in-person</p>
        <p className="emphasis">Discover consistent and sustainable parenting practices.</p>
        <ul>
          <p>Program Breakdown:</p>
          <li>Week 1: Mutual Understanding <em>&#40;preparing the land&#41;</em></li>
          <li>Week 2-4: Situating the Self <em>&#40;tending the soil&#41;</em></li>
          <li>Week 5-8: Establishing House Culture <em>&#40;planting the seeds&#41;</em></li>
          <li>Week 9-12: Intuitive Parenting <em>&#40;nurturing the growth&#41;</em></li>
        </ul>
      </div>

      <div className="program-info">
        <h2 className="parent-consulting-title">Share and Release Venting Session</h2>
        <p>$35/session</p>
        <p>30-min phone call or video chat</p>
        <p className="emphasis">Take up all the space you need.</p>
        <ul>
          <li>Externally process</li>
          <li>Find collaboration</li>
          <li>Brain storm</li>
        </ul>
      </div>
    </div>
  )
}

export default Programs;