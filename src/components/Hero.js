import React from "react";

import myself from "../resources/IMG_4423-2.jpg";

import styles from "../css/Hero.module.css";

export default () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <h1 className={styles.headerText}>Hello! I'm Tommy Nguyen</h1>
        <h3 className={styles.subText}>
          I love to create beautiful and unique digital experiences.
        </h3>
        <img
          className={styles.avatar}
          src={myself}
          alt="photo of Tommy Nguyen"
        />
      </div>
      <p className={styles.cta}>Continue for projects!</p>
    </section>
  );
};
