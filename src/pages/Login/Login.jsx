import React, { useState } from "react";
import styles from "./Login.module.css";
import UsernameForm from "./UsernameForm";
import PasswordForm from "./PasswordForm";
import useAuthenticate from "../../hooks/useAuthenticate";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formState, setFormState] = useState("username");
  const authenticateContext = useAuthenticate();
  const navigate = useNavigate();

  const usernameSubmitHandler = (e) => {
    e.preventDefault();
    setFormState('password');
  };

  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    authenticateContext.setIsAuthenticate(true);
    navigate('/');
  };

  if (formState == "username") {
    return (
      <div className={styles.container}>
        <UsernameForm submitHandler={usernameSubmitHandler} />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <PasswordForm submitHandler={passwordSubmitHandler} />
      </div>
    );
  }
}
