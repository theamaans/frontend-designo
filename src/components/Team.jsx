import React, { useState } from "react";
import Navbar from "./Navbar";
import { title } from "framer-motion/client";

const Team = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg",
      name: "Jessica",
      title: "Frontend developer",
      description: "A web developer who specializes in creating the visual and interactive aspects of a website or web application.",

    },
    {
      image: "https://thumbs.dreamstime.com/b/happy-man-eyeglasses-connected-to-wifi-netbook-thoughtful-bearded-young-man-stylish-eyeglasses-vision-correction-187103188.jpg",
      name: "John doe",
      title: "SDE",
      description: " SDE (Software Development Engineer) is a professional who is responsible for designing, developing, and maintaining software applications or systems.",

    },
    {
      image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Rohan",
      title: "Senior BDE",
      description: "An experienced professional responsible for driving business growth and identifying new opportunities in an organization.",
   
    },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
<div>
    <Navbar />
<div className="team-container">
<h1>MEET OUR TEAM MEMBERS</h1>

<div className="slider-container">

  
  <div className="slider-navigation">
    {slides.map((slide, index) => (
      <button
        key={index}
        onClick={() => handleSlideChange(index)}
        className={`slider-button ${
          activeSlide === index ? "active-slide" : ""
        }`}
        onMouseEnter={() => handleSlideChange(index)} // Hover effect to change slide
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="slider-image"
        />
      </button>
    ))}

    
  </div>

  
  <div className="active-slide-content">
    <div className="image-wrap">
      <img
        src={slides[activeSlide].image}
        alt={slides[activeSlide].title}
        className="active-slide-image"
      />
    </div>
<div className="active-slide-text">
<h2 className="slide-name">{slides[activeSlide].name}</h2>
<h4 className="slide-title">{slides[activeSlide].title}</h4>
<p className="slide-description">{slides[activeSlide].description}</p>
</div>

  </div>

</div>
</div>
</div>
  );
};

export default Team;
