import React from "react";
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src="/bg2.png" alt="Netflix" className="logo" />
      <div className="header-buttons">
        <select className="lang-select">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <button className="signout-btn">Sign Out</button>
      </div>
    </div>
  );
}

export default Header;
