import React from "react";
import styles from "../styles/navbar.module.css";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <div className={styles.navbar}>
      <div>Logo</div>
      <ul>
        <li>
          <NavLink to="/">
            <a>Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <a>Login</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">
            <a>About</a>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
