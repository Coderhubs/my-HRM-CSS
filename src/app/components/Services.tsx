import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div id="Services">
      <section className="services-section">
        <div className="title">
          Why Us?
        </div>
        <div className="container">
          <div className="services-container">
            <div className="service-card">
              <div className="service-img">
                <Image 
                  src="/image/s4.png" 
                  alt="Talent Acquisition" 
                  width={300} 
                  height={200} 
                />
              </div>
              <h2>Talent Acquisition</h2>
            </div>

            <div className="service-card">
              <div className="service-img">
                <Image 
                  src="/image/s3.png" 
                  alt="Performance Management" 
                  width={300} 
                  height={200} 
                />
              </div>
              <h2>Performance Management</h2>
            </div>

            <div className="service-card">
              <div className="service-img">
                <Image 
                  src="/image/s2.png" 
                  alt="Time Efficiency" 
                  width={300} 
                  height={200} 
                />
              </div>
              <h2>Time Efficiency</h2>
            </div>

            <div className="service-card">
              <div className="service-img">
                <Image 
                  src="/image/s1.png" 
                  alt="Employee Training & Development" 
                  width={300} 
                  height={200} 
                />
              </div>
              <h2>Employee Training & Development</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
