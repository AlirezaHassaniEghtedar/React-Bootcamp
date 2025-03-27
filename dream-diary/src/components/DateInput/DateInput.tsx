import { ComponentProps, ReactNode } from "react";

import styles from "./DateInput.module.css";
import clsx from "clsx";

type Props = ComponentProps<"input">;

function DateInput({ className, ...otherProps }: Props): ReactNode {
  return (
    <input
      type="date"
      className={clsx(styles["date-input"], className)}
      {...otherProps}
    />
  );
}

export default DateInput;
