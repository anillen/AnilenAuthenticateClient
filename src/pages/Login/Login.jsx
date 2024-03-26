import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import UsernameForm from "./UsernameForm";
import PasswordForm from "./PasswordForm";
import { useNavigate } from "react-router-dom";
import authenticateService from "../../services/authenticate.service";
import { useMutation } from "@tanstack/react-query";
import Loader from "../../components/UI/Loader/Loader";
import useAuthenticate from "../../hooks/useAuthenticate";

export default function Login() {
  const [formState, setFormState] = useState(0);
  const [loginData, setLoginData] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authenticateContext = useAuthenticate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      authenticateContext.setIsAuthenticate(true);
      navigate("/");
    }
  }, []);

  
  //Request login
  const fetchData = useMutation({
    mutationFn: (loginData) => {
      return authenticateService.login(loginData);
    },
    mutationKey: "access_token",
    onSuccess: ({data}) => {
      localStorage.setItem("access_token", data.accessToken);
      localStorage.setItem("access_token_expires", data.expiresTo);
      navigate("/");
    },
    onError: (error) => {
      setError("Incorrect username or password");
      setFormState(0);
      setLoginData({ userName: "", password: "" });
    },
  });

  const usernameSubmitHandler = (e) => {
    e.preventDefault();
    setFormState(1);
  };

  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    fetchData.mutate(loginData);
  };

  if (fetchData.isPending) return <Loader />;

  if (formState == 0) {
    return (
      <div className={styles.container}>
        <UsernameForm
          loginData={loginData}
          setLoginData={setLoginData}
          submitHandler={usernameSubmitHandler}
          error={error}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <PasswordForm
          loginData={loginData}
          setLoginData={setLoginData}
          submitHandler={passwordSubmitHandler}
        />
      </div>
    );
  }
}
