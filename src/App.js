
import './App.css';
import React from 'react';
import Header from './components/header.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Projects from './components/Projects.js';
import Footer from './components/footer.js';
import Photo from './components/photos.js';



function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Angel Ramirez</h1>
        <Photo />
        <h2>Full Stack Developer</h2>
        
        <About />
        <Contact />

        <Projects />
        <Footer />
      </main>
      

      
   

      
    </div>
  );
}

export default App;
