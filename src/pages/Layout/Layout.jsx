import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import styles from "./Layout.module.css";
import useAuthenticate from "../../hooks/useAuthenticate";
import { useEffect } from "react";

export function Layout() {
  const authenticateContext = useAuthenticate();
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!authenticateContext.isAuthenticate){
      navigate('/login');
    }
    console.debug(`[Layout] Authorise: ${authenticateContext.isAuthenticate}`);
  },[authenticateContext.isAuthenticate]);
  
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header/>
        <Outlet />
      </div>
    </div>
  );
}
