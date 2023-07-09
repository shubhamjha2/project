import React from "react";
import "./navbar.css";
import logo from "./firmking-low-resolution-logo-black-on-transparent-background.png";

export default function Navbar() {
  return (
    <nav className="navigation">
      <ul className="navbar">
        <li className="LOGOFLX">
          <a href="#">
            <img className="logofiem" src={logo} alt="logo" />
          </a>
        </li>
        <li className="hovssss">
          <a href="#">HOME</a>
        </li>
        <li className="hovssss">
          <a href="#">ABOUT US</a>
        </li>
        <li className="hovssss">
          <a href="#">PROCESS</a>
        </li>
        {/* <li className="hovssss">
          <a href="#">TEAM</a>
        </li> */}
        <li className="hovssss">
          <a href="#">PRODUCT</a>
        </li>
        <li className="hovssss">
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
