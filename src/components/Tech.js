import React from "react";

export default () => {
  return (
    <section id="tech" className="tech">
      <div className="tech-header-container">
        <div className="tech-header-eyebrow"></div>
        <h4 className="header">Technologies</h4>
      </div>

      <div className="tech-copy">
        <p>
          My background is in web development and mobile application
          development. Currently my favorite language is JavaScript!
        </p>
      </div>

      <div className="tech-list">
        <div className="tech-col">
          <div className="tech-icon">
            <i class="fas fa-3x fa-desktop"></i>
          </div>
          <h3 className="tech-head">Front-End</h3>
          <div className="tech-body-list">
            <p>React</p>
            <p>JavaScript</p>
            <p>HTML/CSS</p>
            <p>SASS</p>
            <p>Styled Components</p>
          </div>
        </div>
        <div className="tech-col">
          <div className="tech-icon">
            <i class="fas fa-3x fa-server"></i>
          </div>
          <h3 className="tech-head">Back-End</h3>
          <div className="tech-body-list">
            <p>NodeJS</p>
            <p>Express</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>Strapi</p>
          </div>
        </div>
        <div className="tech-col">
          <div className="tech-icon">
            <i class="fas fa-3x fa-mobile-alt"></i>
          </div>
          <h3 className="tech-head">Mobile</h3>
          <div className="tech-body-list">
            <p>Swift</p>
            <p>React Native</p>
          </div>
        </div>
        <div className="tech-col">
          <div className="tech-icon">
            <i class="fas fa-3x fa-align-left"></i>
          </div>
          <h3 className="tech-head">CMS</h3>
          <div className="tech-body-list">
            <p>Strapi</p>
            <p>Wordpress</p>
          </div>
        </div>
      </div>
    </section>
  );
};
