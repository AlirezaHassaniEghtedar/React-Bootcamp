import {ReactNode} from "react";

import styles from "./Carousel.module.css";
import {Attraction} from "../../../../types/attraction.ts";

type Props = {
    attraction: Attraction;
}

function Carousel({attraction}: Props): ReactNode {
    return <div className={styles['carousel']}>
        <img src={`${import.meta.env.VITE_CDN_BASE_URL}/${attraction.carousel[0]}`} alt="" height={480}/>
    </div>
}

export default Carousel;