import {ReactNode, useContext} from "react";

import {useQuery} from "@tanstack/react-query";

import {fetchAttractions} from "../../api/fetch-attractions.ts";

import {FiltersContext} from "../../context/filters-context.ts";

import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";
import Loading from "../Loading/Loading.tsx";

import styles from "./AttractionList.module.css";

function AttractionList(): ReactNode {
    const {filters} = useContext(FiltersContext)

    const {data, isLoading, isFetching, isError, error} = useQuery({
        queryKey: ["attractions", filters],
        queryFn: () => fetchAttractions(filters),
        staleTime: 60 * 1000
    })

    if (isLoading) {
        return <Loading/>
    }

    if (isError) {
        return <>Error : {error ? error.message : "Unexpected Error."}</>
    }

    if (!data) {
        return <>There is no data.</>
    }

    return <ul className={styles["attraction-list"]} style={{opacity: isFetching ? "0.5" : "1"}}>
        {
            data.map(attraction => (
                <AttractionListItem key={attraction.id} attraction={attraction}/>
            ))
        }
    </ul>
}

export default AttractionList;