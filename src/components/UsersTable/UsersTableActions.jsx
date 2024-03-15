import React from "react";
import styles from "./UsersTableActions.module.css";
import Button from "../UI/Button/Button";
export default function UsersTableActions() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <Button>Create</Button>
        <Button>Import</Button>
      </div>
      <input className={styles.searchInput} placeholder="Search" />
    </div>
  );
}
