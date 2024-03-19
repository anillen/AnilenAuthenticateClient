import { useContext } from "react";
import { AuthenticateContext } from "../store/AuthenticateContext/AuthenticateContext";

export default function useAuthenticate() {
    const authenticateContext = useContext(AuthenticateContext);
    return authenticateContext;
}