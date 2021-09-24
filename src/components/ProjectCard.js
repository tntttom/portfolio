import React, { useEffect, useRef, useState } from "react";

export default (props) => {
  return (
    <div className={`card-container`}>
      <div className="project-img-container">
        <img className="project-img" src={props.imgUrl} />
        <div className="project-img-overlay"></div>
      </div>

      <div className="project-info">
        <h3 className="project-header">{props.projectName}</h3>
        <p className="project-description">{props.description}</p>
        <a className="link" href={props.url} target="_blank">
          Site
        </a>
      </div>
    </div>
  );
};
