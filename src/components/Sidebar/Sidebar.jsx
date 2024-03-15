import React from "react";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { getSidebarLinks } from "../../pages/routes";

export default function Sidebar() {
  const sideBarLinks = getSidebarLinks();
  const currentLocationPath = useLocation().pathname;
  return (
    <div className={styles.sidebar}>
      <div>
        <h1 className={styles.title}>Anilen Authenticate</h1>
        <div className={styles.nav}>
          {sideBarLinks.map((link) => {
            if (link.path == "/logout") return;
            return (
              <Link
                className={`${styles.link} ${
                  currentLocationPath == link.path && styles.active
                }`}
                key={link.path}
                to={link.path}
              >
                {link.displayName}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.nav}>
        <Link className={styles.link} to={`/logout`}>
          Logout
        </Link>
      </div>
    </div>
  );
}
