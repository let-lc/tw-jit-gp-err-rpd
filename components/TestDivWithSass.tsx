import React from "react";
import styles from "./TestDiv.module.scss";

const TestDivWithSass = () => {
  return (
    <div className={styles.parent}>
      <p>A title</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        egestas magna quis metus placerat semper. Aenean consectetur pretium
        nulla
      </p>
    </div>
  );
};

export default TestDivWithSass;
