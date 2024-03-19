import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <svg className={styles.circle}>
        <circle
          className={styles.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeMiterlimit="10"
        ></circle>
      </svg>
    </div>
  );
}
