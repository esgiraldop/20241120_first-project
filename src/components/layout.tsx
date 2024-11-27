import React, { ReactNode } from "react";
import { Header } from "./header.component";
import { Footer } from "./footer.component";
import styles from "../styles/layout.module.css";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout): React.JSX.Element => {
  return (
    <div
      className={styles.layout}
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
