import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, prevInView, onInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: false,
  });

  const [isBlurry, setIsBlurry] = useState(false);

  useEffect(() => {
    if (inView) {
      onInView(); // Trigger callback when the section comes into view
    }
  }, [inView, onInView]);

  useEffect(() => {
    // Apply blur effect only when the next section enters the viewport
    if (!inView && prevInView) {
      setIsBlurry(true); // Blur the previous section when the next section is in view
    } else {
      setIsBlurry(false); // Remove the blur when it's in view
    }
  }, [inView, prevInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 20, filter: "blur(0px)" }} // No blur initially
      animate={{
        opacity: inView ? 1 : 0.7,
        y: inView ? 0 : 90, // Vertical movement when the section is out of view
        filter: isBlurry ? "blur(8px)" : "blur(0px)", // Apply blur when needed
        zIndex: inView ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
