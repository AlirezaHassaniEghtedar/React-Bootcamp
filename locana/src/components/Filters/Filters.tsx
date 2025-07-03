import {ReactNode} from "react";

import TagFilter from "./components/TagFilter/TagFilter.tsx";

import styles from "./Filters.module.css";

function Filters() : ReactNode {
    return <div className={styles["filters"]}>
        <TagFilter />
    </div>
}

export default Filters;