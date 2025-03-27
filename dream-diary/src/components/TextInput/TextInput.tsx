import { ComponentProps, ReactNode } from "react";

import styles from "./TextInput.module.css";
import clsx from "clsx";

type Props = ComponentProps<"input"> & {
  suffixIcon?: ReactNode;
};

function TextInput({ className, suffixIcon, ...otherProps }: Props): ReactNode {
  return (
    <div className={clsx(styles["text-input"], className)}>
      <input type="text" {...otherProps} />
      {suffixIcon && <div className={styles.suffix}>{suffixIcon}</div>}
    </div>
  );
}

export default TextInput;
