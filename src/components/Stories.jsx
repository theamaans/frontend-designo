import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Stories_Sec1 from './Stories_Sec1';
import Stories_pag1 from './Stories_pag1';

const Stories = () => {
      const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
        <Navbar />

        <div className="hero-container">
           <div className="hero-content">
             <div className="hero-title">
               <div className="hero-title-letters">
                 {[
                   "S",
                   "T",
                   "O",
                   "R",
                   "I",
                   "E",
                   "S",
                   
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
           where every click reveals a new chapter  
               <br />
             in the story telling journey 
        
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


<Stories_Sec1 />
<Stories_pag1 />

      
    </div>
  )
}

export default Stories
