import { type ReactNode } from "react";

import { Outlet } from "react-router";

import HeaderComponent from "../../components/header/header.component.tsx";
import FooterComponent from "../../components/footer/footer.component.tsx";

import styles from "./root.module.css";

function RootLayout(): ReactNode {
  return (
    <div className={styles["root-layout"]}>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

export default RootLayout;
