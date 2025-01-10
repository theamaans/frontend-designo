import React, { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import HomeFooter from "./HomeFooter";
import Navbar from "./Navbar";

const Home = () => {
  const [sectionInView, setSectionInView] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  useEffect(() => {
    // No need to initialize Locomotive Scroll anymore
  }, []);

  const handleInView = (section) => {
    setSectionInView((prev) => ({
      ...prev,
      [section]: true,
    }));
  };

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Hero />
        </div>
        <div>
          <AnimatedSection
            prevInView={sectionInView.section1}
            onInView={() => handleInView("section1")}
          >
            <Section1 />
          </AnimatedSection>
        </div>
        <div>
          <AnimatedSection
            prevInView={sectionInView.section2}
            onInView={() => handleInView("section2")}
          >
            <Section2 />
          </AnimatedSection>
        </div>
        <div>
          <AnimatedSection
            prevInView={sectionInView.section3}
            onInView={() => handleInView("section3")}
          >
            <Section3 />
          </AnimatedSection>
        </div>
        <div>
          <AnimatedSection
            prevInView={sectionInView.section4}
            onInView={() => handleInView("section4")}
          >
            <Section4 />
          </AnimatedSection>
        </div>
        <div>
          <AnimatedSection
            prevInView={sectionInView.section5}
            onInView={() => handleInView("section5")}
          >
            <Section5 />
          </AnimatedSection>
        </div>
        <div>
          <Section6 />
        </div>
        <div>
          <HomeFooter />
        </div>
      </div>
    </div>
  );
};

export default Home;
