import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Section3image from '../assets/Section3image.jpg';


const Section3 = () => {
  const [prevInView, setPrevInView] = useState(false);

  const handleInView = () => {
    setPrevInView(true);
  };

  return (
    <AnimatedSection prevInView={prevInView} onInView={handleInView}>
      <div className="section section3"
      style={{ backgroundImage: `url(${Section3image})` }} // Corrected background image reference
      
      >
        <div className="content">
          <h3 className="year">2024</h3>
          <h1 className="title">UI/UX design</h1>
          <h3 className="category">Photo</h3>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Section3;
