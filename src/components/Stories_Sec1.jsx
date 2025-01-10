import React, { useState } from "react";

const Stories_Sec1 = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  return (
    <div className="stories-sec1">
      <div className="story-card">
        <div className="story-header">
          <h1 className="category">Nature, Travel</h1>
          <h1 className="title">Blue Ocean Waves</h1>
          <h1 className="date">March 14, 2022</h1>
        </div>
        <div className="story-button">
          <button
            className="read-article-button"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <span className={`button-text ${isHovered1 ? "hidden" : ""}`}>Read Article</span>
            <span className={`button-text-hover ${isHovered1 ? "" : "hidden"}`}>Read Article</span>
          </button>
        </div>
      </div>

      {/* Repeat for other story cards */}
      <div className="story-card">
        <div className="story-header">
          <h1 className="category">Nature, Travel</h1>
          <h1 className="title">Desert Treasure Hunt</h1>
          <h1 className="date">March 14, 2022</h1>
        </div>
        <div className="story-button">
          <button
            className="read-article-button"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <span className={`button-text ${isHovered2 ? "hidden" : ""}`}>Read Article</span>
            <span className={`button-text-hover ${isHovered2 ? "" : "hidden"}`}>Read Article</span>
          </button>
        </div>
      </div>

      <div className="story-card">
        <div className="story-header">
          <h1 className="category">Sport, Travel</h1>
          <h1 className="title">Bird Eye Shots</h1>
          <h1 className="date">March 14, 2022</h1>
        </div>
        <div className="story-button">
          <button
            className="read-article-button"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <span className={`button-text ${isHovered3 ? "hidden" : ""}`}>Read Article</span>
            <span className={`button-text-hover ${isHovered3 ? "" : "hidden"}`}>Read Article</span>
          </button>
        </div>
      </div>

      <div className="story-card">
        <div className="story-header">
          <h1 className="category">Nature, Sport</h1>
          <h1 className="title">Blonde Surf Girl</h1>
          <h1 className="date">March 14, 2022</h1>
        </div>
        <div className="story-button">
          <button
            className="read-article-button"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <span className={`button-text ${isHovered4 ? "hidden" : ""}`}>Read Article</span>
            <span className={`button-text-hover ${isHovered4 ? "" : "hidden"}`}>Read Article</span>
          </button>
        </div>
      </div>

      <div className="story-card">
        <div className="story-header">
          <h1 className="category">Travel, Uncategorized</h1>
          <h1 className="title">Endless Road Stories</h1>
          <h1 className="date">March 14, 2022</h1>
        </div>
        <div className="story-button">
          <button
            className="read-article-button"
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            <span className={`button-text ${isHovered5 ? "hidden" : ""}`}>Read Article</span>
            <span className={`button-text-hover ${isHovered5 ? "" : "hidden"}`}>Read Article</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories_Sec1;
