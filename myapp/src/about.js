// src/components/About.js
import React from 'react';
import './about.css'; // Assuming you will create a separate CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <h2>Sustainable Fertilizer Optimizer for Higher Yields </h2>
        <h2>Vision </h2>
        <p className="about-text">
        To revolutionize global agriculture by promoting sustainable practices that optimize fertilizer usage, enhance soil health, and maximize crop yields, ensuring food security for future generations while protecting the environment.
        </p>
        <h2>Mission </h2>
        <p className="about-text">
        Our mission is to empower farmers with cutting-edge technology that intelligently optimizes fertilizer use, reducing waste, lowering costs, and increasing crop productivity. We are committed to fostering sustainable agricultural practices that balance high-yield farming with ecological preservation, improving soil quality and minimizing environmental impact through data-driven solutions.
        </p>
       
      </div>
    </div>
  );
};

export default About;