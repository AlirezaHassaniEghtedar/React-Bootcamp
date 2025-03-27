import { ReactNode } from "react";

const dreams = [{ title: "dream1" }, { title: "dream2" }, { title: "dream3" }];

import Button from "../Button/Button.tsx";

import styles from "./Result.module.css";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

function Result(): ReactNode {
  return (
    <ul className={styles.result}>
      {dreams.map((dream) => (
        <li key={dream.title}>
          <div className={styles.title}>{dream.title}</div>
          <div className={styles.actions}>
            <Button color="primary" variant="ghost" size="small" shape="square">
              <MingcuteEdit2Line />
            </Button>
            <Button color="danger" variant="ghost" size="small" shape="square">
              <MingcuteDelete2Line />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Result;
