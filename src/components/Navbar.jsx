import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.setAttribute('data-scroll', 'false');
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="navbar">
        <div>
          <img
            src="src/assets/12345678.png"
            alt="Logo"
            onClick={redirectToHome}
            className="logo"
          />
        </div>
        <div className="menu-container">
          <h2
            className="menu-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleMenu}
          >
            <span
              className={`menu-text ${
                isHovered ? 'animate-slideUp' : 'animate-reverseSlideDown'
              }`}
            >
              Menu
            </span>
            <span
              className={`menu-text ${
                isHovered ? 'animate-slideDown' : 'animate-reverseSlideUp'
              }`}
            >
              Menu
            </span>
          </h2>
          <h2 onClick={toggleMenu} className="menu-icon">
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              style={{ color: 'white' }}
            />
          </h2>
        </div>
      </div>
      {isMenuOpen && <NavMenu />}
    </div>
  );
};

export default Navbar;
