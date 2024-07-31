// src/components/InternshipSection.js
import React from 'react';
import './InternshipSection.css';

const internships = [
  {
    company: 'Zebaq Pvt Ltd',
    role: 'Web Development Intern',
    duration: 'May 2024 - Present',
    description: 'Worked on developing and optimizing web applications.',
  },
  {
    company: 'Zebaq Pvt Ltd',
    role: 'Digital Marketing Intern',
    duration: 'Feb 2024 - May 2024',
    description: 'Assisted in designing and implementing Degital Marketing.',
  },
  {
    company: 'Codsoft Pvt Ltd',
    role: 'Web Developemnt Intern',
    duration: 'Oct 2023 - Nov 2023',
    description: 'Assisted in designing and implementing UI components with Senior Developer.',
  },
  // Add more internships as needed
];

const InternshipSection = () => {
  return (
    <section className="internship-section">
      <h2>Internships</h2>
      <div className="internship-list">
        {internships.map((internship, index) => (
          <div key={index} className="internship-item">
            <h3>{internship.company}</h3>
            <p><strong>Role:</strong> {internship.role}</p>
            <p><strong>Duration:</strong> {internship.duration}</p>
            <p>{internship.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;
