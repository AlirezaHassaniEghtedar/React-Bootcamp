import { ReactNode } from "react";

import styles from "./TextInput.module.css";

type Props = {
  placeholder: string;
  suffixIcon: ReactNode;
};

function TextInput({ placeholder, suffixIcon }: Props): ReactNode {
  return (
    <div className={styles["text-input"]}>
      <input type="text" placeholder={placeholder} />
      <div className={styles.suffix}>{suffixIcon}</div>
    </div>
  );
}

export default TextInput;
