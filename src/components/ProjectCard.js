import React from "react";

import styles from "../css/ProjectCard.module.css";

export default (props) => {
  const stagger = 150;
  return (
    <div
      style={{ "animation-delay": `${props.index * stagger}ms` }}
      className={styles.cardContainer}
    >
      <a className={styles.link} href={props.url} target="_blank">
        <img className={styles.projectImg} src={props.imgUrl} />
        <h1 className={styles.projectHeader}>{props.projectName}</h1>
        <p className={styles.projectDescription}>{props.description}</p>
      </a>
    </div>
  );
};
