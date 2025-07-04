import {ReactNode, useEffect, useState} from "react";

import {useParams} from "react-router";

import styles from "./Attraction.module.css";
import {Attraction as AttractionType} from "../../types/attraction.ts";

function Attraction() : ReactNode {
    const {id} = useParams()

    const [attraction, setAttraction] = useState<AttractionType>()

    useEffect(() => {
        const fetchAttraction = async () : Promise<void> => {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`)

            const data = await response.json();

            setAttraction(data)
        };

        fetchAttraction().then()
    }, [id]);

    return <div className={styles.attraction}>{attraction?.title ?? "در حال بارگذاری ..."}</div>
}
export default Attraction;