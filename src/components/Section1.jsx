import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Section1 = () => {
  const [prevInView, setPrevInView] = useState(false);

  const handleInView = () => {
    setPrevInView(true); // Set prevInView when the section comes into view
  };

  return (
    <AnimatedSection prevInView={prevInView} onInView={handleInView}>
      <div className="section section1">
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
