import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        <span></span>
      </label>
      <label for="active" class="close"></label>
      <div class="wrapper">
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
