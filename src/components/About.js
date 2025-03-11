// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>

      <p>I am a <strong>Full Stack Web Developer</strong> passionate about building scalable and efficient web applications. With experience in the <strong>MERN stack, and WordPress</strong>, I focus on creating responsive, high-performance websites that enhance user experience. My expertise includes frontend and backend development, SEO optimization, and database management. Constantly exploring new technologies, I strive to deliver innovative and robust digital solutions..</p>

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
