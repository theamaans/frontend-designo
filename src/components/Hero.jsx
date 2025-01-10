import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-title">
          <div className="hero-title-letters">
            {[
              "D",
              "E",
              "S",
              "I",
              "G",
              "N",
              "-",
              "O",
              "-",
              "C",
              "R",
              "A",
              "F",
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
  );
};

export default Hero;
