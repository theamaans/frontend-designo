import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LocomotiveScroll from "locomotive-scroll";
import Arch1 from '../assets/Arch1.jpg';
import Arch2 from '../assets/Arch2.jpg';
import Arch3 from '../assets/Arch3.jpg';
import Arch4 from '../assets/Arch4.jpg';

const Arc_Section1 = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      inertia: 0.2,
      direction: "horizontal",
      lerp: 0.2,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();

    const scrollAmount = e.deltaY;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newScroll = currentScroll + scrollAmount;

    const totalWidth = scrollContainerRef.current.scrollWidth;
    const containerWidth = scrollContainerRef.current.clientWidth;

    if (newScroll >= totalWidth - containerWidth) {
      scrollContainerRef.current.scrollLeft = 0;
    } else if (newScroll <= 0) {
      scrollContainerRef.current.scrollLeft = totalWidth - containerWidth;
    } else {
      scrollContainerRef.current.scrollLeft = newScroll;
    }
  };

  const handlePrev = () => {
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newScroll = currentScroll - 300; // Adjust scroll amount as needed
    scrollContainerRef.current.scrollLeft = newScroll;
  };

  const handleNext = () => {
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newScroll = currentScroll + 300; // Adjust scroll amount as needed
    scrollContainerRef.current.scrollLeft = newScroll;
  };

  return (
    <div className="arc-section1-container">
      <div className="arc-section1-header">
        <h1 className={`arc-section1-title ${isHovered ? "hovered" : ""}`}>
          THE ARCHIVE
        </h1>
        <p className={`arc-section1-description ${isHovered ? "hovered" : ""}`}>
          These projects are too valuable to be lost. <br /> Present our dedication, creativity, and essence of effort.
        </p>
      </div>

      <div className="arc-section1-navigation">
        <button className="arc-section1-button prev" onClick={handlePrev}>
          <span className="icon">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "white" }} />
          </span>
          <span>PREV</span>
        </button>
        <button className="arc-section1-button next" onClick={handleNext}>
          <span>NEXT</span>
          <span className="icon">
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "white" }} />
          </span>
        </button>
      </div>

      <div
        className="arc-section1-scroll-container"
        ref={scrollContainerRef}
        onWheel={handleWheel}
      >
        <div className="arc-section1-scroll-content">
          <div
            className="arc-section1-card card-1"
            style={{ backgroundImage: `url(${Arch1})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>

          <div
            className="arc-section1-card card-2"
            style={{ backgroundImage: `url(${Arch2})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>

          <div
            className="arc-section1-card card-3"
            style={{ backgroundImage: `url(${Arch3})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>

          <div
            className="arc-section1-card card-4"
            style={{ backgroundImage: `url(${Arch4})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>

          <div
            className="arc-section1-card card-5"
            style={{ backgroundImage: `url(${Arch1})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>

          <div
            className="arc-section1-card card-6"
            style={{ backgroundImage: `url(${Arch2})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>

          <div
            className="arc-section1-card card-7"
            style={{ backgroundImage: `url(${Arch3})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>

          <div
            className="arc-section1-card card-8"
            style={{ backgroundImage: `url(${Arch4})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Arc_Section1;
