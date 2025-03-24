import { ReactNode } from "react";

import styles from "./Header.module.css";

function Header(): ReactNode {
  return (
    <div className={styles.header}>
      <h1>Dream Diary</h1>
    </div>
  );
}

export default Header;
