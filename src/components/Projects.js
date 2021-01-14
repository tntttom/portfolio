import React from "react";

import ProjectCard from "../components/ProjectCard";
import projects from "../resources/data";

import styles from "../css/Projects.module.css";

export default () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.header}>Projects</h1>
      <div className={styles.projectContainer}>
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
