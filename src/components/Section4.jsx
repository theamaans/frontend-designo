import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Section4image from '../assets/Section4image.jpg';


const Section4 = () => {
  const [prevInView, setPrevInView] = useState(false);

  const handleInView = () => {
    setPrevInView(true);
  };

  return (
    <AnimatedSection prevInView={prevInView} onInView={handleInView}>
      <div className="section section4" style={{ backgroundImage: `url(${Section4image})` }}>
        <div className="content">
          <h3 className="year">2024</h3>
          <h1 className="title">SEO optimization</h1>
          <h3 className="category">Photo</h3>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Section4;
