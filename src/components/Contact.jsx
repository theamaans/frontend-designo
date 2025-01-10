import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Map from './Map';
import Form from './Form';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredf, setIsHoveredf] = useState(false);
  const [isFollowHovered, setIsFollowHovered] = useState(false);

  const scrollToTop = () => {
    const scrollInstance = window.locomotiveScrollInstance;
    if (scrollInstance) {
      scrollInstance.scrollTo(0, {
        duration: 1000, // Smooth scrolling duration
        easing: [0.25, 0.0, 0.35, 1.0], // Cubic Bezier easing
      });
    } else {
      // Fallback for browsers without Locomotive Scroll
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <Navbar />
      {/* Header Section */}
   

    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-title">
          <div className="hero-title-letters">
            {[
              "C",
              "O",
              "N",
              "T",
              "A",
              "C",
              "T",
            
            ].map((letter, index) => (
              <span
                key={index}
                className="hero-title-letter"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <p className="hero-description">
          We are a creative studio, specialized in strategy, branding
          <br />
          design, and development. Our work is always at the intersection
          <br />
          of design and technology.
        </p>
      </div>

      <div className="hero-footer">
        <button
          className="hero-button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className={`hero-button-text ${
              isHovered ? "hero-button-text-active" : "hero-button-text-inactive"
            }`}
          >
            Scroll to Explore{" "}
            <FontAwesomeIcon icon={faAngleDown} style={{ color: "#ffffff" }} />
          </span>
          <span
            className={`hero-button-text ${
              isHovered
                ? "hero-button-text-hover-active"
                : "hero-button-text-hover-inactive"
            }`}
          >
            Scroll to Explore{" "}
            <FontAwesomeIcon icon={faAngleDown} style={{ color: "#ffffff" }} />
          </span>
        </button>
        <h2 className="hero-featured-projects">Featured Projects</h2>
      </div>
    </div>






      {/* Map and Form Section */}


      <div className='direction-container'>
      <Form />
      <Map />
   
      </div>
     











      {/* Footer Section */}
       <div className="footer-container">
           <div className="footer-header">
             <p className="footer-title">
            interested to discover more from our works 
             </p>
             <div className="footer-letters">
               {["P", "R", "O", "J", "E", "C", "T", "S"].map(
                 (letter, index) => (
                   <span key={index} className="footer-letter">
                     {letter}
                   </span>
                 )
               )}
             </div>
           </div>
     
           <div className="footer-bottom">
             {/* Back to Top Button */}
             <button
               className="footer-button"
               onClick={scrollToTop} // Call scrollToTop on click
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
             >
               <span
                 className={`footer-button-text ${
                   isHovered ? "footer-button-text-active" : "footer-button-text-inactive"
                 }`}
               >
                 <FontAwesomeIcon icon={faAngleUp} style={{ color: "#ffffff" }} />{" "}
                 back to top
               </span>
               <span
                 className={`footer-button-text-hover ${
                   isHovered ? "footer-button-text-hover-active" : "footer-button-text-hover-inactive"
                 }`}
               >
                 <FontAwesomeIcon icon={faAngleUp} style={{ color: "#ffffff" }} />{" "}
                 back to top
               </span>
             </button>
     
             {/* Follow Us Section */}
             <div
               className="follow-us-section"
               onMouseEnter={() => setIsFollowHovered(true)}
               onMouseLeave={() => setIsFollowHovered(false)}
             >
               <h2
                 className={`follow-us-title ${
                   isFollowHovered ? "follow-us-hovered" : ""
                 }`}
               >
                 Follow Us
               </h2>
               <div
                 className={`follow-us-links ${
                   isFollowHovered ? "follow-us-hovered" : ""
                 }`}
               >
                 <a href="#">In</a>
                 <a href="#">Fb</a>
                 <a href="#">Be</a>
                 <a href="#">Db</a>
                 <a href="#">Tw</a>
               </div>
             </div>
     
             <h2 className="footer-copyright">2024 © All rights reserved.</h2>
           </div>
         </div>
    </div>
  );
};

export default Contact;
