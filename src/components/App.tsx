import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Services from './Services';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" Component={About} />
        <Route path="/Services" Component={Services} />
        <Route path="/" Component={Home} />
        <Route path="/Projects" Component={Projects} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
    </Router>
  )
}

export default App;
