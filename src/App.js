
import React from 'react';
import Navbar from '../src/components/Navbar';
import FrontPage from '../src/components/FrontPage';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import Contact from '../src/components/Contact';
import Certification from './components/Certification';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      <About />
      <Projects />
      <Skills />
      <Certification />
      <Contact />
    </div>
  );
}

export default App;
