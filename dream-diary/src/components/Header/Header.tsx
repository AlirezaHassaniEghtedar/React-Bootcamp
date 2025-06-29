import { ReactNode } from "react";

import {useTranslation} from "react-i18next";

import styles from "./Header.module.css";

function Header(): ReactNode {

    const {t} = useTranslation()

  return (
    <div className={styles.header}>
      <h1>{t("app.title")}</h1>
    </div>
  );
}

export default Header;
