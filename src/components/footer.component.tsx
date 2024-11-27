import React from "react";
import styles from "../styles/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>© 2024 Your Company</p>
      <ul>
        <li>
          <a href="#facebook">Facebook</a>
        </li>
        <li>
          <a href="#twitter">Twitter</a>
        </li>
        <li>
          <a href="#instagram">Instagram</a>
        </li>
        <li>
          <a href="#linkedin">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};
