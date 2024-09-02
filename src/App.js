
import './App.css';
import React from 'react';
import Header from './components/header.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Projects from './components/Projects.js';
import Footer from './components/footer.js';
import Photo from './components/photos.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router> 
    <div>
      <Header />
      <main>
        <h1>Angel Ramirez</h1>
        <Photo />
        <h2>Full Stack Developer & Electrical Engineer</h2>
        <About />
        <Projects />
        <Contact />
        <Routes>
            <Route path="/Pabout" element={<About />} />
    
          </Routes>
        
      </main>
      <Footer />

      
   

      
    </div>
    </Router>
  );
}

export default App;
