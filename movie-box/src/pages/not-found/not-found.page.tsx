import { type ReactNode } from "react";

import styles from "./not-found.module.css";

function NotFoundPage(): ReactNode {
  return (
    <div className={styles["not-found"]}>
      <h3>404</h3>
      <h2>صفحه مورد نظر پیدا نشد</h2>
    </div>
  );
}

export default NotFoundPage;
