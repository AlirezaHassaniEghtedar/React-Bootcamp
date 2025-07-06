import {ReactNode} from "react";

import styles from "./AttractionBody.module.css";
import {Attraction} from "../../../../types/attraction.ts";

type Props = {
    attraction : Attraction
}

function AttractionBody({attraction} : Props):ReactNode {
    return <div className={styles['attraction-body']}>
        <div dangerouslySetInnerHTML={{__html : attraction.body}} />
    </div>
}

export default AttractionBody;