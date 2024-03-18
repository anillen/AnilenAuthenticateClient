import React, { useState } from "react";
import { AuthenticateContext } from "./AuthenticateContext";

export default function AuthenticateContextProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  return (
    <AuthenticateContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
      {children}
    </AuthenticateContext.Provider>
  );
}
