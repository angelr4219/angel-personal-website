// src/components/Projects.js

import React from 'react';

export const Projects = () => {
    return (
        <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>Digital Spotify Visualizer. Tools and technologies used: Python .</p>
          <a href="https://github.com/angelr4219/Digital-Visualizer-spotipy">View Project</a>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Mariachi De Uclatlan. Tools and technologies used: Html, CSS, JavaScript, React, node.js.</p>
          <a href="[link to project or GitHub repo]">View Project</a>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
    );
  };
export default Projects;
