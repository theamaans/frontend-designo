import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Section6 = ({ updateScroll }) => { // Add updateScroll as a prop
  const headingsRef = useRef([]);
  const [activeIndices, setActiveIndices] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setActiveIndices((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          } else {
            setActiveIndices((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    headingsRef.current
      .filter((el) => el)
      .forEach((heading) => observer.observe(heading));

    return () => {
      headingsRef.current
        .filter((el) => el)
        .forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const textItems = [
    "Web design",
    "Mobile app development",
    "UI/UX design",
    "SEO optimization",
    "Social media management",
    "Data analytics",
    "Content creation",
  ];

  useEffect(() => {
    if (updateScroll) {
      updateScroll(); // Trigger the scroll update when Section 6 is rendered
    }
  }, [updateScroll]);

  return (
    <div className="section6-container">
      <div className="section6-header">
        <h3 className="section6-title">
          Crafting websites where the elegance <br /> of design intersects with the science of selling products.
        </h3>
        <button className="section6-button">See All Works</button>
      </div>

      {/* Animated Text Section */}
      <div className="section6-text">
        {textItems.map((item, index) => (
          <h1
            key={index}
            ref={(el) => (headingsRef.current[index] = el)}
            data-index={index}
            className={`section6-text-item ${activeIndices.includes(index) ? "active" : ""}`}
          >
            {item}
          </h1>
        ))}
      </div>

      <div className="section6-contact">
        <div className="section6-contact-item">
          <FontAwesomeIcon icon={faMessage} />
          <h1 className="contact-info">office@example.com</h1>
          <p className="contact-type">Email</p>
        </div>
        <div className="section6-contact-item">
          <FontAwesomeIcon icon={faLocationDot} />
          <h1 className="contact-info">New York, USA</h1>
          <p className="contact-type">Address</p>
        </div>
        <div className="section6-contact-item">
          <FontAwesomeIcon icon={faPhone} />
          <h1 className="contact-info">7770005623</h1>
          <p className="contact-type">Phone</p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
