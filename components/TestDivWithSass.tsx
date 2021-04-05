import React from "react";
import styles from "./TestDiv.module.scss";

const TestDivWithSass = () => {
  return (
    <div className={styles.parent}>
      <p>New Project</p>
      <p>Create a new project from a variety of starting templates.</p>
    </div>
  );
};

export default TestDivWithSass;
