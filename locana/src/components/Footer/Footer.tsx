import {ReactNode} from "react";

import styles from "./Footer.module.css";

function Footer(): ReactNode {
    const year = new Date().getFullYear();

    return <footer className={styles["footer"]}>
        <span>تمامی حقوق این سایت متعلق به من میباشد .</span>
        <span>Copyright &copy; {year}</span>
    </footer>
}

export default Footer;