import { type ReactNode } from "react";

import styles from "./about.module.css";

export default function AboutPage(): ReactNode {
  return <div className={styles["about"]}>این صفحه درباره ما است .</div>;
}
