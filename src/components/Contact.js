// Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container" id="contact">
      <h2 className="header">Contact Me</h2>
      <div className="icons">
        <a href="mailto:rupamgiri.dev@gmail.com" className="icon">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/rupamgiri/-linkedin/" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/rupam121" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
