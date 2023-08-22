import React from "react";
import Header from "../Header/Header";
import styles from "./MainLayout.module.css";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
