import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./custom.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="nav-content">
        <Link className="nav-logo" to="/">
          <img
            src="/src/assets/ChatGPT Image Apr 12, 2025, 01_28_47 PM.png"
            alt="PureSeal Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span className="website-name">Pure Seal</span>
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/product">
            Products
          </Link>
          <Link className="nav-item" to="/about">
            About Us
          </Link>
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
