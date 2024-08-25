// src/components/Projects.js

import React from 'react';

export const Projects = () => {
    return (
        <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>Description of project 1. Tools and technologies used: [tech stack].</p>
          <a href="[link to project or GitHub repo]">View Project</a>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Description of project 2. Tools and technologies used: [tech stack].</p>
          <a href="[link to project or GitHub repo]">View Project</a>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
    );
  };
export default Projects;
