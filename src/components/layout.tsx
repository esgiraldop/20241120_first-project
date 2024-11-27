import React, { ReactNode } from "react";
import { Header } from "./header.component";
import { Footer } from "./footer.component";

export const Layout = ({ children }: ReactNode) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
