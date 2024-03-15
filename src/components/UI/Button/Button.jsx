import React from "react";
import styles from "./Button.module.css";
export default function Button({ clickHandler, children }) {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {children}
    </button>
  );
}
