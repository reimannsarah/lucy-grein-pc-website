import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About/About';
import Services from './Services';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import React, { ReactNode } from 'react';
import LandingPage from './LandingPage/LandingPage';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return(
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={LandingPage}></Route>
        <Route 
          element={
            <MainLayout>
              <Route path="/about" Component={About} />
              <Route path="/Services" Component={Services} />
              <Route path="/" Component={Home} />
              <Route path="/Projects" Component={Projects} />
              <Route path="/Contact" Component={Contact} />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App;
