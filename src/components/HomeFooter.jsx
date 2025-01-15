import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const HomeFooter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFollowHovered, setIsFollowHovered] = useState(false);

  return (
    <div className="footer-container">
      <div className="footer-header">
        <p className="footer-title">
          exploring our world of visual and interactive design
        </p>
        <div className="footer-letters">
          {["O", "U", "R", "-", "S", "T", "U", "D", "I", "O"].map(
            (letter, index) => (
              <span key={index} className="footer-letter">
                {letter}
              </span>
            )
          )}
        </div>
      </div>

      <div className="footer-bottom">
       <div className="btn-footer">
         {/* Back to Top Button */}
         <button
          className="footer-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Default smooth scroll
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
       </div>

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
  );
};

export default HomeFooter;
