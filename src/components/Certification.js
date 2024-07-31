// Certification.js
import React from "react";
import "./Certification.css";
import mernCertImage from "../assets/mern-certificate.jpg";
import cpp from "../assets/cpp.png";
import js from "../assets/javascript.png";
import htmlcss from "../assets/htmlcss.png";
import seo from "../assets/seo.png";
import projectmanagement from "../assets/project-management.png";

const certifications = [
  {
    title: "Certified MERN Stack Developer",
    description:
      "A comprehensive certification proving expertise in MERN development.",
    image: mernCertImage,
    link: "#",
  },
  {
    title: "HTML5 & CSS3",
    description: "Certification for Project Management skills.",
    image: htmlcss,
    link: "https://www.pirple.com/certificates/bbocwfb8re",
  },
  {
    title: "Javascript Language",
    description: "Certification for Javascript Language skills.",
    image: js,
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-javascript?utm_source_page=public_certificate_view&referrer_code=GL6YZGIVPTWCQ",
  },
  {
    title: "C++ Language",
    description: "Certification for C++ Language skills.",
    image: cpp,
    link: "https://example.com/certification2",
  },
  {
    title: "Project Management",
    description: "Certification for Project Management skills.",
    image: projectmanagement,
    link: "https://www.udemy.com/certificate/UC-43e39b92-f08f-40d6-a270-791a4574a2f9/",
  },
  {
    title: "SEO Master",
    description: "Certification for SEO Master skills.",
    image: seo,
    link: "https://www.udemy.com/certificate/UC-efaf2024-cb7e-4157-a44b-4746ced719e9/",
  },
  // Add more certifications as needed
];

function Certification() {
  return (
    <div className="certification-page" id="Certification">
      <h1>Certifications</h1>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="certification-image"
              />
            )}
            <h2 className="certification-title">{cert.title}</h2>
            <p className="certification-description">{cert.description}</p>
            <a
              href={cert.link}
              className="certification-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certification
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
