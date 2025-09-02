import { type ReactNode } from "react";

import styles from "./about.module.css";

export default function AboutPage(): ReactNode {
  return <div className={styles["about"]}>This is about us page .</div>;
}
