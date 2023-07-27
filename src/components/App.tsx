import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Services from './Services';
import Values from './Values/Values';
import Home from './Home/Home';
import Projects from './Projects';
import Contact from './Contact';
import React, { ReactNode } from 'react';
import LandingPage from './LandingPage/LandingPage';
import Footer from './Footer/Footer';
import Bio from './Bio/Bio';
import ScrollToTop from './ScrollToTop.tsx';
import { TransitionGroup, CSSTransition } from 'react-transition-group'; 
import '../styles/App.css';
// import { useState } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <TransitionGroup>
        <CSSTransition timeout={450} classNames="fade">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bio" element={<MainLayout><Bio /></MainLayout>} />
        <Route path="/values" element={<MainLayout><Values /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
      </Routes>
      </CSSTransition>
      </TransitionGroup>
    </Router>
  )
}

export default App;
