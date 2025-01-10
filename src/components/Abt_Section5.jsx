import React, { useState, useEffect } from "react";

const Abt_Section5 = () => {
  // List of services
  const services = [
    "Web Design",
    "Mobile App Development",
    "E-Commerce Solutions",
    "Digital Marketing",
    "UI/UX Design",
    "Brand Strategy",
    "SEO Optimization",
    "Social Media Management",
    "Content Creation",
    "Data Analytics",
  ];

  const [width, setWidth] = useState("80vw"); // Start at 80vw

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("section3");
      if (section) {
        const rect = section.getBoundingClientRect();
        const scrollPercentage =
          Math.min(Math.max(window.innerHeight - rect.top, 0), rect.height) /
          rect.height;

        // Adjust width dynamically (from 80vw to 100vw) but limit max to 100vw
        const calculatedWidth = Math.min(80 + scrollPercentage * 20, 100); // From 80vw to 100vw
        setWidth(`${calculatedWidth}vw`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div
        id="section3"
        className="content-wrapper"
        style={{
          width: width, // Dynamic width based on scroll
        }}
      >
        {/* Left Section: Title */}
        <div className="title-section">
          <h1 className="title">OUR</h1>
          <h1 className="title">SERVICES</h1>
        </div>

        {/* Right Section: Services */}
        <div className="services-section">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <span className="service-name">{service}</span>
              <button className="service-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Abt_Section5;
