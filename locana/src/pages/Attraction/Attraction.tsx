import {ReactNode} from "react";

import {useQuery} from "@tanstack/react-query";

import {useParams} from "react-router";

import {fetchAttraction} from "../../api/fetch-attraction.ts";

import AttractionSidebar from "./components/AttractionSidebar/AttractionSidebar.tsx";
import Carousel from "./components/Carousel/Carousel.tsx";
import AttractionBody from "./components/AttractionBody/AttractionBody.tsx";

import styles from "./Attraction.module.css";

function Attraction(): ReactNode {
    const {id} = useParams()

    const {data : attraction , isFetching , isError , error} = useQuery({queryKey : ['attraction' , id] , queryFn : () => fetchAttraction(id)})

    if (isFetching) {
        return <>در حال بارگذاری ...</>
    }

    if(isError) {
        return <>Error : {error ? error.message : "Unexpected Error."}</>
    }

    if(!attraction) {
        return <>There is no data.</>
    }

    return <div className={styles.attraction}>
        <AttractionSidebar attraction={attraction} />
        <Carousel attraction={attraction} />
        <AttractionBody attraction={attraction} />
    </div>
}

export default Attraction;