import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./firmking-low-resolution-logo-black-on-transparent-background.png";
import "./navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navigation ${menuOpen ? "mobile-menu-open" : ""}`}>
      <div className="nav-logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="mobile-menu-toggle" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar ${menuOpen ? "mobile-menu" : ""}`}>
        <li className={`hovssss ${activeLink === "/" && "active"}`}>
          <Link to="/" onClick={() => handleLinkClick("/")}>
            HOME
          </Link>
        </li>
        <li className={`hovssss ${activeLink === "/about" && "active"}`}>
          <Link to="/about" onClick={() => handleLinkClick("/about")}>
            ABOUT US
          </Link>
        </li>
        <li className={`hovssss ${activeLink === "/process" && "active"}`}>
          <Link to="/process" onClick={() => handleLinkClick("/process")}>
            PROCESS
          </Link>
        </li>
        <li className={`hovssss ${activeLink === "/product" && "active"}`}>
          <Link to="/product" onClick={() => handleLinkClick("/product")}>
            PRODUCT
          </Link>
        </li>
        <li className={`hovssss ${activeLink === "/contact" && "active"}`}>
          <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
