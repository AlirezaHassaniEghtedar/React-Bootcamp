import {ReactNode} from "react";

import {Attraction} from "../../types/attraction.ts";

import {Link} from "react-router";

import FluentEmojiFlatStar from "../../icons/FluentEmojiFlatStar.tsx";

import styles from "./AttractionListItem.module.css";

type Props = {
    attraction : Attraction;
}

function AttractionListItem({attraction} : Props) :ReactNode {
    return  <li className={styles["attraction-list-item"]}>
        <div className={styles.visuals}>
            <img
                className={styles.thumbnail}
                src={`${import.meta.env.VITE_CDN_BASE_URL}/${attraction.thumbnail}`}
                alt=""
            />
        </div>
        <div className={styles.writings}>
            <Link to={`/attraction/${attraction.id}`} className={styles.title}>
                {attraction.title}
            </Link>
            <div className={styles.ratings}>{attraction.averageRating}<FluentEmojiFlatStar /></div>
            <div className={styles.description}
                 dangerouslySetInnerHTML={{__html: attraction.description}}
            />
        </div>
        <ul className={styles.tags}>
            {
                attraction.tags.map(tag => (
                    <li key={tag.id}>{tag.title}</li>
                ))
            }
        </ul>
    </li>
}

export default AttractionListItem;