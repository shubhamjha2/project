import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import xyz from './404-tick.png'; 


export default function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false); //popup
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const templateParams = Object.fromEntries(formData.entries());
    console.log("Form data:", templateParams);
    emailjs
      .send(
        "service_rl39cat",
        "template_n19w7jc",
        templateParams,
        "JoLdxb-WsCgyh3-OL"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
          console.log("message successfully sent");
          setShowPopup(true); // after successful submission
        },
        (error) => {
          console.log("Error sending message:", error.text);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false); 
  };

  return (
    <div className="contact-container">
      <div className="blur-background"></div>
      {showPopup && ( 
        <div className="conpopup">
          <div className="popup-content">
            <img src={xyz} alt="Logo" className="conlogo" />
            <p>Your details are successfully submitted. Thank you!</p>
            <button className="button_conta" onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h2 className="heading">Get In Touch</h2>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Full name"
            name="from_name"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Mail"
            name="from_mail"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone no."
            name="from_phone"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            id="message"
            name="from_message"
            placeholder="Message"
            className="textarea"
          ></textarea>
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}
