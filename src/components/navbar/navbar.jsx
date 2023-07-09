import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./firmking-low-resolution-logo-black-on-transparent-background.png";

export default function Navbar() {
  return (
    <nav className="navigation">
      <ul className="navbar">
        <li className="LOGOFLX">
          <Link to="/">
            <img className="logofiem" src={logo} alt="logo" />
          </Link>
        </li>
        <li className="hovssss">
          <Link to="/">HOME</Link>
        </li>
        <li className="hovssss">
          <Link to="/about">ABOUT US</Link>
        </li>
        <li className="hovssss">
          <Link to="/process">PROCESS</Link>
        </li>
        {/* <li className="hovssss">
          <Link to="/team">TEAM</Link>
        </li> */}
        <li className="hovssss">
          <Link to="/product">PRODUCT</Link>
        </li>
        <li className="hovssss">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
