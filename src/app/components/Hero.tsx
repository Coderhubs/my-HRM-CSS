import React from 'react';
import Button from "./button";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        &quot;Empowering Talent for a Brighter Future&quot;
      </h1>
      <h2 className="hero-subtitle">
        Our innovative HR solutions are designed to enhance talent, promote a positive workplace culture, and support each employee&apos;s journey toward personal and professional success. Discover how we can help you build a thriving, engaged workforce ready to take on the future.
      </h2>
      <Button />
    </div>
  );
};

export default Hero;
