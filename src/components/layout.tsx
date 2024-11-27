import React from "react";
import { Header } from "./header.component";
import { Footer } from "./footer.component";
import styles from "../styles/layout.module.css";
import { Outlet } from "react-router";

// interface ILayout {
//   children: ReactNode;
// }

export const Layout = (): React.JSX.Element => {
  return (
    <div
      className={styles.layout}
      style={{ backgroundColor: "var(--secondary-color)" }}
    >
      <Header />
      {/* <main className={styles.main}>{children}</main> */}
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
