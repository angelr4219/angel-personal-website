
import './App.css';
import React from 'react';
import Header from './components/header.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Projects from './components/Projects.js';
import Footer from './components/footer.js';



function App() {
  return (
    <div>
      <Header />
      <About />
      <Contact />

      <Projects />
      <Footer />
   

      
    </div>
  );
}

export default App;
