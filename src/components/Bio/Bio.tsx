import fallCreek from '../../assets/imgs/lucy-fall-creek.png';

const Bio: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Intro</h2>
        <p>Hi there! I am an emerging parent consultant with a background in behavior management, curriculum development, and trauma informed care. I specialize in early childhood education and working with neurodivergent students. I practice a strengths-based approach to help families build functional systems. As an autistic professional, my career has been shaped by my unique perspective and passion for connection.</p>
        <p>
        I am based out of Portland, OR, but have lived in many cities around the world. I spend my time basking in the love of my family and animals, wandering about outdoors, and always listening to, playing, and making music.
        </p>
        <img src={fallCreek}></img>
      </div>
      <div><p>It's taken me a minute to get here</p></div>
      <div>
        <h2>The Journey</h2>
        <p>I have led a winding path that has shaped this ever-evolving career. It all began with my first job as a summer camp counselor for a local nonprofit, My Voice Music (MVM). I received what I believe will be the greatest mentorship of my life over seven summers. I went into my undergraduate program wide-eyed and excited; I studied history and historiography at Macalester College, but ultimately withdrew from the program because I could not connect the dots between my passions and my studies. This led me to World Around Us childcare center where I experienced some of the dysfunctional systems that impact early childhood education. From there, I transitioned to working with families as a private nanny and curriculum designer and fell in love with the intimate connections I fostered.
        </p>
        <p>
        After receiving my autism diagnosis, meandering my way through a global pandemic, and embracing the death of my dear friend and mentor, the founder of MVM, I discovered parent education. I decided to finish my education at Portland State University, where I carved out the path forward as a parenting consultant. This work answers the questions of my past, present, and future; it is what ties me to my community and moves me beyond the realms I already know. Most recently, I am developing Intuition Theory (IT) with my partner, a local curriculum writer and early childhood educator, Grant Peters. I led a workshop on IT at the Oregon Parent Educators Conference in May 2023.
        </p>
        <p>
        My career has informed a holistic, trauma-informed, and strengths based approach to working with the foundational units of our communities: families. I have developed an expertise for working with children and specialize in neurodiversity, behavior management, and curriculum development. However, I was called to work with parents when I repeatedly saw the stress and anxiety parents face, especially when trying to navigate their children's disruptive behaviors. I believe that parents deserve support through reflective processing, collaborative tool building, and effective assessment that encourage the development of their own intuitive practices for raising their children.
        </p>
        <p>
        The experiences described above have led me to where I am today, working as a parent consultant and developing Intuition Theory. These two projects are deeply aligned. The services I offer are grounded in my knowledge of children and families as well as the philosophical explorations of IT. The theory is situated in the intersections of  behavioral science, psychology, and philosophy. IT describes the phenomenological truths that inform our intuitive responses. I am approaching this development of this model from an experiential standpoint -- I actively use IT to assess the behaviors I observe in children and assist families with defining their personal parenting practices. My goal is to teach parents how to use IT and discover intuitive parenting as an application of the theory.
        </p>
        <p>
        I hope you'll join me as the journey continues!
        </p>
      </div>
    </div>
  )
}

export default Bio;