import React, { useRef, useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";


export default function PasswordForm({ submitHandler, loginData, setLoginData }) {
  const [value, setValue] = useState("");

  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={styles.login_card} onSubmit={submitHandler}>
      <div className={styles.form_control}>
      <h3>Enter password:</h3>
        <Input
          name="password"
          value={loginData.password}
          onChange={(e)=>{
            setLoginData({...loginData,password:e.target.value})
          }}
          type="password"
          autoFocus={true}
          autoComplete="on"
          required = {true}
        ></Input>
        <Button>Select</Button>
      </div>
    </form>
  );
}
