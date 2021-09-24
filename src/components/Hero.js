import React, { useRef } from "react";
import myself from "../resources/IMG_4423-2.jpg";

export default () => {
  return (
    <section className="hero-container" id="about">
      <div className="hero-text-container">
        <h1 className={`header-text`}>Hello!</h1>
        <p className="header-subtext">
          My name is Tommy, I'm a developer who loves working with anything
          JavaScript! Currently, I'm creating websites and exploring the rich
          ecosystem of development.
        </p>
        {/* <img className="avatar" src={myself} alt="photo of Tommy Nguyen" /> */}
      </div>

      {/* <p className="cta">Continue for projects!</p> */}
    </section>
  );
};
