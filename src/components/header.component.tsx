import React from "react";
import styles from "../styles/navbar.module.css";

export const Header = () => {
  return (
    <div className={styles.navbar}>
      <div>Logo</div>
      <ul>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
    </div>
  );
};
