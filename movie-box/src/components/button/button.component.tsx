import { type ComponentProps, type ReactNode } from "react";

import styles from "./button.module.css";
import clsx from "clsx";

type Color = "primary" | "danger";
type Variant = "solid" | "outlined" | "ghost";
type Size = "small" | "medium" | "large";
type Shape = "rectangle" | "square" | "circle";

type Props = ComponentProps<"button"> & {
  color?: Color;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

function ButtonComponent({
  color = "primary",
  variant = "solid",
  size = "medium",
  shape = "rectangle",
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[color],
        styles[variant],
        styles[size],
        styles[shape],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
