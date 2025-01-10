import React from 'react';

const StoriesPag1 = () => {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables smooth scrolling to the top
    });
  };

  return (
    <div className="stories-container">
      <div className="stories-content">
        {/* Left Arrow */}
        <div
          className="arrow left-arrow"
          onClick={scrollToTop} // Scroll to top on click
        >
          &larr;
        </div>

        {/* Page Numbers */}
        <div className="page-numbers">
          <span>1</span>
          <span className="separator">-</span>
          <span>2</span>
        </div>

        {/* Right Arrow */}
        <div
          className="arrow right-arrow"
          onClick={scrollToTop} // Scroll to top on click
        >
          &rarr;
        </div>
      </div>
    </div>
  );
};

export default StoriesPag1;
