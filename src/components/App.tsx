import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About/About';
import Services from './Services';
import Home from './Home/Home';
import Projects from './Projects';
import Contact from './Contact';
import React, { ReactNode } from 'react';
import LandingPage from './LandingPage/LandingPage';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App;
