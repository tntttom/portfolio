import React from "react";

import styles from "../css/Header.module.css";

export default () => {
  return (
    <header>
      <h1 className={styles.logo}>TN</h1>
      <div className={styles.linkContainer}>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Say Hi!</a>
      </div>
    </header>
  );
};
