import React, { useEffect } from "react";
import useAuthenticate from "../../hooks/useAuthenticate";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const authenticateContext = useAuthenticate();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("access_token_expires");
    authenticateContext.setIsAuthenticate(false);
    navigate("/login");
  }, []);

  return <div>Logout</div>;
}
