import { ComponentProps, ReactNode } from "react";

import styles from "./Select.module.css";

import { SelectOption } from "../../types/select-options.ts";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
  suffixIcon: ReactNode;
};

function Select({ options, suffixIcon }: Props): ReactNode {
  return (
    <div className={styles.select}>
      <select>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className={styles.suffix}>{suffixIcon}</div>
    </div>
  );
}

export default Select;
