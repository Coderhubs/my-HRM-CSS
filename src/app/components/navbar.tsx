import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            Human Resources
          </div>

          {/* Hamburger icon for mobile */}
          <div className="navbar-hamburger">
            <button className="hamburger-button">
              <svg
                className="hamburger-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="navbar-links">
            <a href="/" className="nav-link">Home</a>
            <a href="#About" className="nav-link">About</a>
            <a href="#Services" className="nav-link">Services</a>
            <a href="#Contact" className="nav-link">Contact Me</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;