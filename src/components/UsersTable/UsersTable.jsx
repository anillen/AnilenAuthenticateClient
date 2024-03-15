import React from "react";
import Table from "../Table/Table";

export default function UsersTable({ users }) {
  return (
      <Table>
        <thead>
          <th>Phone number</th>
          <th>Username</th>
          <th>Last name</th>
          <th>First name</th>
          <th>Middle name</th>
          <th>Email</th>
        </thead>
        <tbody>
          <tr>
            <td>+7(911)-339-39-39</td>
            <td>Toster</td>
            <td></td>
            <td></td>
            <td></td>
            <td>toster@ts.com</td>
          </tr>
          <tr>
            <td>+7(911)-339-39-39</td>
            <td>Toster</td>
            <td></td>
            <td></td>
            <td></td>
            <td>toster@ts.com</td>
          </tr>
          <tr>
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
