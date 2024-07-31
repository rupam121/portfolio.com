// src/components/Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {/* Add your projects here */}
        <div className="project-card">
          {/* <img src="path/to/travel-app-image.jpg" alt="Travel App" className="project-image" /> */}
          <h3>Travel App</h3>
          <p>
            A comprehensive travel application designed to enhance the user
            experience for planning and managing trips. Features include
            destination recommendations, itinerary planning, real-time flight
            and hotel booking, and local attraction guides. Users can also
            access personalized travel suggestions based on their preferences
            and past activities.
          </p>
          <a href="https://github.com/rupam121/TravelingApp" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card">
          {/* <img src="path/to/link-shortner-image.jpg" alt="Link Shortner" className="project-image" /> */}
          <h3>Link Shortner</h3>
          <p>
            A simple yet effective tool for shortening long URLs into more
            manageable links. This project allows users to create shortened
            links that are easier to share and track. The application includes
            features for viewing analytics on link clicks and managing created
            links, making it ideal for both personal and professional use.
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
