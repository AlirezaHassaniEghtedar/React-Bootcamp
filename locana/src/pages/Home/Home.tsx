import {ReactNode} from "react"; 

import styles from "./Home.module.css";

function Home () : ReactNode {
    return <div className={styles["home"]}>این صفحه خانه است .</div>
}

export default Home;