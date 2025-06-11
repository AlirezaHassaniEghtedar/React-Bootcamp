import {ReactNode} from "react";

import {Attraction} from "../../types/attraction.ts";

import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";

import styles from "./AttractionList.module.css";

type Props = {
    attractions: Attraction[]
}

function AttractionList({attractions}: Props): ReactNode {
    return <ul className={styles["attraction-list"]}>
        {
            attractions.map(attraction => (
                <AttractionListItem key={attraction.id} attraction={attraction} />
            ))
        }
    </ul>
}

export default AttractionList;