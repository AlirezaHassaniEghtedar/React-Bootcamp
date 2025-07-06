import {ReactNode} from "react";

import {Attraction} from "../../../../types/attraction.ts";

import MingcutePhoneLine from "../../../../icons/MingcutePhoneLine.tsx";
import MingcuteLocationLine from "../../../../icons/MingcuteLocationLine.tsx";

import styles from "./AttractionSidebar.module.css";

type Props = {
    attraction: Attraction
}

function AttractionSidebar({attraction}: Props): ReactNode {
    return <aside className={styles['attraction-sidebar']}>
        <div className={styles.title}>اطلاعات جاذبه گردشگری</div>
        {attraction.phone && (
            <div className={styles.phone}>
                <MingcutePhoneLine/>
                {attraction.phone}
            </div>
        )}
        <div className={styles.address}>
            <MingcuteLocationLine/>
            {attraction.address}
        </div>
    </aside>
}

export default AttractionSidebar;