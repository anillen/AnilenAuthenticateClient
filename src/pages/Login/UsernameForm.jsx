import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default function UsernameForm({ submitHandler, loginData, setLoginData, error }) {
  return (
    <form className={styles.login_card} onSubmit={submitHandler}>
      <div className={styles.form_control}>
      <h3>Enter username:</h3>
        <Input
          name="username"
          value={loginData.userName}
          onChange={(e)=>{
            setLoginData({...loginData, userName:e.target.value});
          }}
          autoFocus={true}
          required = {true}
          autoComplete="on"
        ></Input>
        <Button>Select</Button>
      </div>
      {error&& <p>{error}</p>}
    </form>
  );
}
