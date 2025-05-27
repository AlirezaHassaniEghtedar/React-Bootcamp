import {ComponentProps, forwardRef, ReactNode} from "react";

import {SelectOption} from "../../types/select-options.ts";
import {Variant} from "../../types/select-variant.ts";

import styles from "./Select.module.css";
import clsx from "clsx";

type Props = ComponentProps<"select"> & {
    variant?: Variant;
    options: SelectOption[];
    suffixIcon: ReactNode;
};

const Select = forwardRef<HTMLSelectElement , Props>( function Select({variant = "solid", options, suffixIcon , ...otherProps}: Props , ref): ReactNode {
    return (
        <div className={clsx(styles.select, styles[variant])}>
            <select ref={ref} {...otherProps}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className={styles.suffix}>{suffixIcon}</div>
        </div>
    );
})

export default Select;
