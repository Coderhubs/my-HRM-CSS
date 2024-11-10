import React from 'react';

const Contact = () => {
  return (
    <div id="Contact">
      <section
        className="contact-section"
        style={{
          backgroundImage: 'url(/image/img5.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background Overlay */}
        <div className="background-overlay"></div>

        <div className="container">
          <div className="form-container">
            <h2 className="form-title">
              Contact Us
            </h2>
            <p className="form-description">
              Feel free to connect with us
            </p>

            {/* Full Name Field */}
            <div className="form-field">
              <label htmlFor="name" className="field-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="field-input"
              />
            </div>

            {/* Contact No Field */}
            <div className="form-field">
              <label htmlFor="contact" className="field-label">
                Contact No
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                className="field-input"
              />
            </div>

            {/* Email Field */}
            <div className="form-field">
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="field-input"
              />
            </div>

            {/* Message Field */}
            <div className="form-field">
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="field-textarea"
              />
            </div>
            <button className="submit-button">
              Send message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;