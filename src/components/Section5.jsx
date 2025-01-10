import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Section5 = () => {
  const [prevInView, setPrevInView] = useState(false);

  const handleInView = () => {
    setPrevInView(true);
  };

  return (
    <AnimatedSection prevInView={prevInView} onInView={handleInView}>
      <div className="section section5">
        <div className="content">
          <h3 className="year">2024</h3>
          <h1 className="title">Social media management</h1>
          <h3 className="category">Photo</h3>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Section5;