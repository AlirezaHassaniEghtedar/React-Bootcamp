import { ReactNode } from "react";

import style from "./BackgroundLayer.module.css";

function BackgroundLayer(): ReactNode {
  return <div className={style["bg-layer"]}></div>;
}

export default BackgroundLayer;
