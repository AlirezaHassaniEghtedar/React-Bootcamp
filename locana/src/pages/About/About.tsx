import {ReactNode} from "react";

import styles from "./About.module.css";

function About() : ReactNode {
    return <div className={styles["about"]}>این صفحه درباره ما است .</div>
}

export default About;