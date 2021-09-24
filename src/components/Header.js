import React, { useRef } from "react";
import useIntersection from "../hooks/useIntersection";

export default () => {
  return (
    <header>
      <div className="logo-container">
        <h1 className="logo">TN</h1>
      </div>

      <input type="checkbox" className="nav-checkbox" id="nav-toggle" />
      <label for="nav-toggle" className="nav-button">
        <span className="nav-icon">&nbsp;</span>
      </label>

      <div className="nav-mobile-bg"> </div>

      <div className="linkContainer">
        <a href="#about">About Me</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
      </div>
    </header>
  );
};

{
  /* <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label> */
}
