import React from "react";
import styles from "./Users.module.css";
import UsersTable from "../../components/UsersTable/UsersTable";
import UsersTableActions from "../../components/UsersTable/UsersTableActions";

export default function Users() {
  const users = {};
  return (
    <div className={styles.container}>
      <h1>List users</h1>
      <UsersTableActions />
      <UsersTable users={users} />
    </div>
  );
}
