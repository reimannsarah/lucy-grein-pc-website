import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  )
}

export default App;
