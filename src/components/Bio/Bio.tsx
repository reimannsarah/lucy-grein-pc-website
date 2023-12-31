import fallCreek from '../../assets/imgs/lucy-fall-creek.png';
import './Bio.css';
import '../../styles/App.css';
// import { CSSTransition } from 'react-transition-group';

const Bio: React.FC = () => {
  return (
    // <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div>
        <div className="intro-pic">
          <div className="intro-text">
            <h2 className="intro-title">Intro</h2>
            <p className="intro-p">Hi there! I am an emerging parent consultant with a background in behavior management, curriculum development, and trauma informed care. I specialize in early childhood education and working with neurodivergent students. I practice a strengths-based approach to help families build functional systems. As an autistic professional, my career has been shaped by my unique perspective and passion for connection.
            </p>
            <p>
              I am based out of Portland, OR, but have lived in many cities around the world. I spend my time basking in the love of my family and animals, wandering about outdoors, and always listening to, playing, and making music.
            </p>
          </div>
            <img className="fall-creek-img" src={fallCreek}></img>
        </div>

        <div id="middle"><h3>It's taken me a minute to get here</h3></div>

        <div className="journey">
          <h2 className="journey-title">The Journey</h2>
          <p className="journey-p">I have led a winding path that has shaped this ever-evolving career. It all began with <strong> my first job as a summer camp counselor for a local nonprofit, My Voice Music (MVM).</strong> I received what I believe will be the greatest mentorship of my life over seven summers. I went into my undergraduate program wide-eyed and excited; <strong>I studied history and historiography at Macalester College</strong>, but ultimately withdrew from the program because I could not connect the dots between my passions and my studies. This led me to World Around Us childcare center where I experienced some of the dysfunctional systems that impact early childhood education. From there, <strong>I transitioned to working with families as a private nanny and curriculum designer and fell in love with the intimate connections I fostered.</strong>
          </p>
          <p className="journey-p">
            <strong>After receiving my autism diagnosis</strong>, meandering my way through a global pandemic, and embracing the death of my dear friend and mentor, the founder of MVM, I discovered parent education. <strong>I decided to finish my education at Portland State University</strong>, where I carved out the path forward as a parenting consultant. This work answers the questions of my past, present, and future; it is what ties me to my community and moves me beyond the realms I already know. Most recently, I am developing <strong>Intuition Theory (IT)</strong> with my partner, a local curriculum writer and early childhood educator, Grant Peters. <strong>I led a workshop on IT at the Oregon Parent Educators Conference in May 2023.</strong>
          </p>
          <p className="journey-p">
            <strong>My career has informed a holistic, trauma-informed, and strengths based approach to working with the foundational units of our communities: families.</strong> I have developed an expertise for working with children and specialize in <strong>neurodiversity</strong>, behavior management, and curriculum development. However, I was called to work with parents when I repeatedly saw the stress and anxiety parents face, especially when trying to navigate their children's disruptive behaviors. I believe that parents deserve support through <strong>reflective processing, collaborative tool building, and effective assessment that encourage the development of their own intuitive practices for raising their children.</strong>
          </p>
          <p className="journey-p">
            The experiences described above have led me to where I am today, working as a parent consultant and developing Intuition Theory. These two projects are deeply aligned. <strong>The services I offer are grounded in my knowledge of children and families as well as the philosophical explorations of IT.</strong> The theory is situated in the intersections of  behavioral science, psychology, and philosophy. IT describes the phenomenological truths that inform our intuitive responses. I am approaching this development of this model from an experiential standpoint -- I actively use IT to assess the behaviors I observe in children and assist families with defining their personal parenting practices. <strong>My goal is to teach parents how to use IT and discover intuitive parenting as an application of the theory.</strong>
          </p>
          <p className="journey-p" id="last-sentence">
            <strong>I hope you'll join me as the journey continues!</strong>
          </p>
        </div>
      </div>
  )
}

export default Bio;