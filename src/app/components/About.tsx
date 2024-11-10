import React from 'react';
import Button from './button';
import Image from 'next/image';

const About = () => {
  return (
    <div id="About">
      <section className="about-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-box">
              <h2 className="heading">About Us</h2>
              <p className="text-content">
                We believe that people are an organization&apos;s most valuable asset. Our mission is to help businesses attract, develop, and retain top talent by providing customized HR solutions. With expertise in recruitment, training, performance management, and compliance, we focus on building positive workplace cultures that drive productivity and growth.
              </p>
              <br />
              <h6 className="heading">Our Mission</h6>
              <p className="text-content">
                We believe that people are an organization&apos;s most valuable asset. Our mission is to help businesses attract, develop, and retain top talent by providing customized HR solutions. With expertise in recruitment, training, performance management, and compliance, we focus on building positive workplace cultures that drive productivity and growth.
              </p>

              <div className="button-container">
                <Button />
              </div>
            </div>
            <div className="image-container">
              {/* Replace <img> with <Image /> */}
              <Image
                src="/image/HRM.jpg" 
                alt="About Us Image" 
                className="image"
                width={500}  // Set appropriate width
                height={300} // Set appropriate height
                layout="intrinsic" // Use intrinsic layout, or adjust based on needs
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
