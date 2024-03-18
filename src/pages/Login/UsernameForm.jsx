import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default function UsernameForm({ submitHandler }) {
  const [value, setValue] = useState("");
  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={styles.login_card} onSubmit={submitHandler}>
      <h3>Enter username:</h3>
      <div className={styles.form_control}>
        <Input
          name="username"
          value={value}
          onChange={changeInputHandler}
          autoFocus={true}
          required = {true}
        ></Input>
        <Button>Select</Button>
      </div>
    </form>
  );
}
