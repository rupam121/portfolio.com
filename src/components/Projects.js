// src/components/Projects.js
import React from "react";
import "./Projects.css";
import quizApp from '../assets/quiz-app.png';
import travelApp from '../assets/travel-app.png'
import linkshortApp from '../assets/linkshort-App.png'
import SMApp from '../assets/smapp.png'

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {/* Add your projects here */}
        <div className="project-card">
          <img src={SMApp} alt="Travel App" className="project-image" />
          <h3>Social Media Dashboard</h3>
          <p>Social Media Dashboard is a React-based web app that displays real-time follower counts and engagement stats from various social media platforms. </p>
          <a href="https://social-media-dashboard-two-alpha.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card">
          <img src={quizApp} alt="Travel App" className="project-image" />
          <h3>QUIZ APP</h3>
          <p>
            The Quiz App is an interactive web-based application that allows users to test their knowledge through a series of multiple-choice questions.
          </p>
          <a href="https://quiz-app-ashen-delta.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card">
          <img src={travelApp} alt="Travel App" className="project-image" />
          <h3>Travel App</h3>
          <p>
            A comprehensive travel application designed to enhance the user
            experience for planning and managing trips. Features include
            destination recommendations, itinerary planning, real-time flight
            and hotel booking, and local attraction guides.
          </p>
          <a href="https://github.com/rupam121/TravelingApp" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card">
          <img src={linkshortApp} alt="Link Shortner" className="project-image" />
          <h3>Link Shortner</h3>
          <p>
            A simple yet effective tool for shortening long URLs into more
            manageable links. This project allows users to create shortened
            links that are easier to share and track.
          </p>
          <a href="https://link-to-link-shortner.com" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card">
          {/* <img src="path/to/weather-app-image.jpg" alt="Weather App" className="project-image" /> */}
          <h3>Weather App</h3>
          <p>
            A user-friendly weather application that provides current and
            forecasted weather conditions. It includes features such as
            real-time updates, hourly and daily forecasts, and severe weather
            alerts. The app is designed to deliver accurate and timely weather
            information to help users plan their day effectively.
          </p>
          <a href="https://github.com/rupam121/WeatherForecastingApp" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card">
          {/* <img src="path/to/candy-store-image.jpg" alt="Candy Store" className="project-image" /> */}
          <h3>Candy Store</h3>
          <p>
            An engaging and visually appealing e-commerce platform for
            purchasing a variety of candies. This project includes a catalog of
            candy products, a shopping cart, and a checkout system. It also
            features user reviews, product recommendations, and promotional
            offers to enhance the shopping experience.
          </p>
          <a href="https://github.com/rupam121/Museum-Candy" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
