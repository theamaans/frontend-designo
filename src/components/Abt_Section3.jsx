import React, { useState, useEffect } from "react";

const Abt_Section3 = () => {
  // State for determining if we are on a large screen
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Array of images with properties
  const images = [
    { src: "/assets/1.jpg", alt: "Award 1", size: "w-72 h-72" },
    { src: "/assets/2.jpg", alt: "Award 2", size: "w-36 h-36" },
    { src: "/assets/3.jpg", alt: "Award 3", size: "w-96 h-96" },
    { src: "/assets/4.jpg", alt: "Award 4", size: "w-72 h-72" },
    { src: "/assets/5.jpg", alt: "Award 5", size: "w-36 h-36" },
    { src: "/assets/6.jpg", alt: "Award 6", size: "w-96 h-96" },
  ];

  // Update the state based on window width
  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth > 1466);
  };

  // Set up event listener on mount and remove it on unmount
  useEffect(() => {
    checkScreenSize(); // Check the screen size when the component mounts
    window.addEventListener("resize", checkScreenSize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up event listener
    };
  }, []);

  return (
    <div className="recognitions-section">
      {/* Section Title */}
      <h1 className="section-title">Recognitions</h1>
      <p className="section-subtitle">Our Prestigious Design Awards</p>

      {/* Wrapper for Images */}
      <div className="images-wrapper">
        {/* Images Section */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-item ${image.size}`}
          >
            <img
              className="image"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      {/* End Thumbs Wrapper (visible only on large screens) */}
      <div className={`end-thumbs-wrapper ${isLargeScreen ? "visible" : "hidden"}`}>
      </div>
    </div>
  );
};

export default Abt_Section3;
