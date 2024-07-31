// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>

      <p>Hello! I'm <strong>Rupam Giri</strong>, a recent graduate with a Bachelor's degree in Computer Science and Engineering from Nalanda Institute of Technology, Bhubaneswar. I completed my degree with an impressive 8.08 SGPA and no backlogs, demonstrating my dedication and consistency towards achieving my goals.</p>

      <h3>Skills</h3>
      <ul>
        <li>
          <span className="skill-title">Full Stack Web Development:</span> Proficient in both front-end and back-end technologies, enabling the creation of dynamic and responsive web applications.
        </li>
        <li>
          <span className="skill-title">Digital Marketing:</span> Experienced in leveraging online marketing strategies to enhance brand visibility and engagement.
        </li>
        <li>
          <span className="skill-title">Content Creation:</span> Skilled in producing engaging and high-quality content tailored to various audiences.
        </li>
      </ul>

    </section>
  );
}

export default About;
