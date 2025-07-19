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
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/pages/builder">Constructor</a>
            </li>
            <li>
              <a href="/pages/library">Biblioteca</a>
            </li>
            <li>
              <a href="/pages/acercade">Acerca</a>
            </li>
          </ul>
        </div>
       
      </nav>

  );
};

export default Nav;
