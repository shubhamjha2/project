
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="blur-background"></div>{" "}
      <form className="contact-form">
        <h2 className="heading">Get In Touch</h2>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input type="text" id="name" name="name" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input type="email" id="email" name="email" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">
            Phone:
          </label>
          <input type="tel" id="phone" name="phone" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea id="message" name="message" className="textarea"></textarea>
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}
