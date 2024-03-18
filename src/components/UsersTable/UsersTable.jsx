import React from "react";
import Table from "../Table/Table";
import styles from "../Table/Table.module.css"

export default function UsersTable({ users }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Phone number</th>
          <th>Username</th>
          <th>Last name</th>
          <th>First name</th>
          <th>Middle name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tr_hovered}>
          <td>+7(911)-339-39-39</td>
          <td>Toster</td>
          <td></td>
          <td></td>
          <td></td>
          <td>toster@ts.com</td>
        </tr>
        <tr className={styles.tr_hovered}>
          <td>+7(911)-339-39-39</td>
          <td>Toster</td>
          <td></td>
          <td></td>
          <td></td>
          <td>toster@ts.com</td>
        </tr>
        <tr className={styles.tr_hovered}>
          <td>+7(911)-339-39-39</td>
          <td>Toster</td>
          <td></td>
          <td></td>
          <td></td>
          <td>toster@ts.com</td>
        </tr>
      </tbody>
    </Table>
  );
}
