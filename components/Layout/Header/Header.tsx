import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link href="/">MIZUIRO LAB</Link>
        </h1>
      </div>
    </header>
  );
}
