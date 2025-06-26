import {ReactNode} from "react";

import styles from "./NotFound.module.css";

function NotFound() : ReactNode {
    return <div className={styles["not-found"]}>
        <h3>404</h3>
        <h2>صفحه مورد نظر پیدا نشد</h2>
    </div>
}

export default NotFound;