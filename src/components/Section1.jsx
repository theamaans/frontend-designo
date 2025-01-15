import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Section1image from '../assets/Section1image.jpg';

const Section1 = () => {
  const [prevInView, setPrevInView] = useState(false);

  const handleInView = () => {
    setPrevInView(true); // Set prevInView when the section comes into view
  };

  return (
    <AnimatedSection prevInView={prevInView} onInView={handleInView}>
      <div
        className="section section1"
        style={{ backgroundImage: `url(${Section1image})` }} // Corrected background image reference
      >
        <div className="content">
          <h3 className="year">2024</h3>
          <h1 className="title">Web design</h1>
          <h3 className="category">Photo</h3>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Section1;
