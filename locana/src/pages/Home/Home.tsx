import {ReactNode, useEffect, useMemo, useState} from "react";

import AttractionList from "../../components/AttractionList/AttractionList.tsx";

import styles from "./Home.module.css";
import Filters from "../../components/Filters/Filters.tsx";

import {Filters as FiltersType} from "../../types/filters.ts"
import {Attraction} from "../../types/attraction.ts";

function Home(): ReactNode {
    const [allAttractions, setAllAttractions] = useState<Attraction[]>([])
    const [filters, setFilters] = useState<FiltersType>({tags: []})

    const filteredAttractions = useMemo(() => {
        return allAttractions.filter((attraction) => {
            if (filters.tags.length === 0) {
                return true;
            }

            return attraction.tags.some(tag => filters.tags.find(x => x.id === tag.id))
        })
    } , [filters , allAttractions])

    useEffect(() => {
        const fetchAttractions = async (): Promise<void> => {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/attraction`);
            const data = await response.json();
            setAllAttractions(data);
        }

        fetchAttractions().then();
    }, []);

    return <div className={styles["home"]}>
        <Filters filters={filters} setFilters={setFilters}/>
        <AttractionList attractions={filteredAttractions}/>
    </div>
}

export default Home;