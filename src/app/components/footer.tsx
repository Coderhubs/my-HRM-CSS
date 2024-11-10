import React from 'react';
import Image from 'next/image'; // Importing the Image component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">&copy; Copy right Human Resources, 2024</p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/simra.jabeen.96?mibextid=ZbWKwL"
              className="social-icon"
              target="_blank" rel="noopener noreferrer"
            >
              <Image
                src="/image/facebook.png"
                alt="Facebook-Logo"
                className="social-icon-image"
                width={100}
                height={100}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sumra-jabeen-12037a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="social-icon"
              target="_blank" rel="noopener noreferrer"
            >
              <Image
                src="/image/linkedin.png"
                alt="LinkedIn-Logo"
                className="social-icon-image"
                width={100}
                height={100}
              />
            </a>

            <a
              href="https://www.instagram.com/simra_mumbai/profilecard/?igsh=bTBrYjk2cDBodzB6"
              className="social-icon"
              target="_blank" rel="noopener noreferrer"
            >
              <Image
                src="/image/instagram.png"
                alt="Instagram-Logo"
                className="social-icon-image"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
