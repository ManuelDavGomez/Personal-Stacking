import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li>
            <a href="/">INICIO</a>
          </li>
          <li>
            <a href="/pages/builder">CONSTRUCTOR</a>
          </li>
          <li>
            <a href="/pages/library">BIBLIOTECA</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
