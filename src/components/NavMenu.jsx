import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [hoverStates, setHoverStates] = useState({
    archive: false,
    about: false,
    stories: false,
    team: false,
    contact: false,
  });

  const handleMouseEnter = (key) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <div className="navmenu-container">
      <div className="navmenu-content">
        {/* Archive */}
        <Link
          to="/archive"
          className="navmenu-link"
          onMouseEnter={() => handleMouseEnter('archive')}
          onMouseLeave={() => handleMouseLeave('archive')}
        >
          <span
            className={`navmenu-text ${
              hoverStates.archive ? 'animate-slideUp' : 'animate-reverseSlideDown'
            }`}
          >
            ARCHIVE
          </span>
          <span
            className={`navmenu-text ${
              hoverStates.archive ? 'animate-slideDown' : 'animate-reverseSlideUp'
            }`}
          >
            ARCHIVE
          </span>
        </Link>

        {/* About */}
        <Link
          to="/about"
          className="navmenu-link"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={() => handleMouseLeave('about')}
        >
          <span
            className={`navmenu-text ${
              hoverStates.about ? 'animate-slideUp' : 'animate-reverseSlideDown'
            }`}
          >
            ABOUT
          </span>
          <span
            className={`navmenu-text ${
              hoverStates.about ? 'animate-slideDown' : 'animate-reverseSlideUp'
            }`}
          >
            ABOUT
          </span>
        </Link>

        {/* Stories */}
        <Link
          to="/stories"
          className="navmenu-link"
          onMouseEnter={() => handleMouseEnter('stories')}
          onMouseLeave={() => handleMouseLeave('stories')}
        >
          <span
            className={`navmenu-text ${
              hoverStates.stories ? 'animate-slideUp' : 'animate-reverseSlideDown'
            }`}
          >
            STORIES
          </span>
          <span
            className={`navmenu-text ${
              hoverStates.stories ? 'animate-slideDown' : 'animate-reverseSlideUp'
            }`}
          >
            STORIES
          </span>
        </Link>

         {/* Team */}

        <Link
          to="/team"
          className="navmenu-link"
          onMouseEnter={() => handleMouseEnter('team')}
          onMouseLeave={() => handleMouseLeave('team')}
        >
          <span
            className={`navmenu-text ${
              hoverStates.team ? 'animate-slideUp' : 'animate-reverseSlideDown'
            }`}
          >
            TEAM
          </span>
          <span
            className={`navmenu-text ${
              hoverStates.team ? 'animate-slideDown' : 'animate-reverseSlideUp'
            }`}
          >
            TEAM
          </span>
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          className="navmenu-link"
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={() => handleMouseLeave('contact')}
        >
          <span
            className={`navmenu-text ${
              hoverStates.contact ? 'animate-slideUp' : 'animate-reverseSlideDown'
            }`}
          >
            CONTACT
          </span>
          <span
            className={`navmenu-text ${
              hoverStates.contact ? 'animate-slideDown' : 'animate-reverseSlideUp'
            }`}
          >
            CONTACT
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
