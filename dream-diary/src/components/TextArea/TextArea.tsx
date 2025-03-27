import { ComponentProps, ReactNode } from "react";

import styles from "./TextArea.module.css";
import clsx from "clsx";

type Props = ComponentProps<"textarea">;

function TextArea({ className, ...otherProps }: Props): ReactNode {
  return (
    <textarea
      rows={3}
      className={clsx(styles["text-area"], className)}
      {...otherProps}
    ></textarea>
  );
}

export default TextArea;
