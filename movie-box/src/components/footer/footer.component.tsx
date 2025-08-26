import { type ReactNode } from "react";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className={styles["footer"]}>
      <span>تمامی حقوق این سایت متعلق به من میباشد .</span>
      <span>Copyright &copy; {year}</span>
    </footer>
  );
}
