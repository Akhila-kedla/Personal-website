import React from "react";
import "./Contact.css";

// Create a context for images
const icon = require.context("./images/icon", false, /\.(png|jpe?g|svg)$/);

const email = "akhilakedla25@example.com"; // Change this to your email

const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-form-container">
          <div className="contact-form-content">
            <div className="email-container">
              <img
                src={icon("./gmail.svg")}
                className="email-icon"
                alt="email-icon"
              />
              <h3>{email}</h3>
            </div>

            <div className="contact-or">
              <span> or </span> <hr />
            </div>

            <p>Feel free to reach out to me through the form below.</p>
            {/* Change to your action link from Formspree */}
            <form
              className="contact-form"
              method="POST"
              action="your-formspree-endpoint"
            >
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
