// src/components/FrontPage.js
import React from 'react';
import './FrontPage.css';
import profilePic from '../assets/RUPAM-DP.jpg'; // Make sure to replace with your actual profile image path

function FrontPage() {
  return (
    <header className="front-page" id="home">
      <div className="front-page-container">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="intro">
          <h1>Hello, I'm Rupam Giri</h1>
          {/* <p>I'm a MERN Stack Enthusias with experience in 6 Month Internship.</p> */}
          <a href="#projects" className="cta-button">See My Work</a>
        </div>
      </div>
    </header>
  );
}

export default FrontPage;
