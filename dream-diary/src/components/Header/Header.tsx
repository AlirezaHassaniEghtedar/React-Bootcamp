import { ReactNode } from "react";

import style from "./Header.module.css";

function Header(): ReactNode {
  return (
    <div className={style.header}>
      <h1>Dream Diary</h1>
    </div>
  );
}

export default Header;
