import React, { useRef } from "react";
import useIntersection from "../hooks/useIntersection";

import ProjectCard from "../components/ProjectCard";
import projects from "../resources/data";

export default () => {
  return (
    <section id="projects" className="projects">
      <div className="header-container">
        <div className={`header-eyebrow`}></div>
        <h3 className="header">Projects</h3>
      </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            description={project.description}
            url={project.projectUrl}
            imgUrl={project.projectImg}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
