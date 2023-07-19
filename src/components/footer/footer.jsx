import React from "react";
import "./footer.css";
import logo from "./firmking-low-resolution-logo-black-on-transparent-background.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img className="footer-logo" src={logo} alt="logo" />
        <div className="social-icons">
          <a href="#" className="social-icon">
            <span className="instagram-icon"></span>
          </a>
          <a href="#" className="social-icon">
            <span className="yt-icon"></span>
          </a>
          <a href="#" className="social-icon">
            <span className="linkedin-icon"></span>
          </a>
          <a href="#" className="social-icon">
            <span className="watsapp-icon"></span>
          </a>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="footer-right">
        {/* <h2>Contact</h2> */}
        <p>
          <strong>Firmking Pvt. Ltd.</strong> <br />
          Survey No. 65/P2, Rajkot-Gondal, NH 27, B/h Bharat Petrolium, At
          Shemla, Ta. Gondal, Rajkot - 360 311, Delhi, India
        </p>

        <p>
          <a href="mailto:jha.shubham.9350@gmail.com">
            jha.shubham.9350@gmail.com
          </a>
          <p>+91 9350923096</p>
        </p>
      </div>
    </footer>
  );
}

export function Copyright() {
  return (
    <p className="copyright">
      &copy; 2023 Firmking Pvt. Ltd. All Rights Reserved.
    </p>
  );
}
