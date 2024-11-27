import React from "react";
import { Form } from "../components/form.component";
import styles from "../styles/login.module.css";

export const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h1 style={{ color: "var(--text-secondary)" }}>Form</h1>
      <Form />
    </div>
  );
};
