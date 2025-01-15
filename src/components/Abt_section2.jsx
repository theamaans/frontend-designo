import React, { useEffect } from 'react';


const Abt_Section2 = () => {
  useEffect(() => {
    const heroSection = document.querySelector('.hero-section'); 
    const videoWrapper = document.querySelector('.clipped-image');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const maxScrollHeight = 800; 
      const progress = Math.min(scrollY / maxScrollHeight, 1); 

      const clipPathHero = `circle(${22 + progress * 50}%)`; 
      const clipPathVideo = `circle(${10 + progress * 50}%)`; 

      if (heroSection) {
        heroSection.style.clipPath = clipPathHero;
      }

      if (videoWrapper) {
        videoWrapper.style.clipPath = clipPathVideo;
      }
    };

    // Attach the scroll event
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup scroll event on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="content-container">
        <div className="background-div"></div>

        {/* Video Wrapper */}
        <div className="content-video-wrapper clipped-image">
          <video className="bgvid" autoPlay muted loop>
            <source src="src/assets/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Abt_Section2;
