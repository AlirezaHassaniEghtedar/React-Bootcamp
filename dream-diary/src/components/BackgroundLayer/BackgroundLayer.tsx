import { ReactNode } from "react";

import styles from "./BackgroundLayer.module.css";

function BackgroundLayer(): ReactNode {
  return <div className={styles["bg-layer"]}></div>;
}

export default BackgroundLayer;
