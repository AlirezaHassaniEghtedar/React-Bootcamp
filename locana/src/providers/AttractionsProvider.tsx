import {PropsWithChildren, ReactNode, useContext, useEffect, useState} from "react";

import {AttractionsContext} from "../context/attractions-context.ts";
import {FiltersContext} from "../context/filters-context.ts";

import {Attraction} from "../types/attraction.ts";

type Props = PropsWithChildren;

function AttractionsProvider({children}: Props): ReactNode {
    const  {filters} = useContext(FiltersContext)

    const [filteredAttractions, setfilteredAttractions] = useState<Attraction[]>([])

    useEffect(() => {
        const fetchAttractions = async (): Promise<void> => {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/attraction`);
            const data = await response.json();

            setfilteredAttractions(data);
        }

        fetchAttractions().then();
    }, [filters]);

    return <AttractionsContext.Provider value={{filteredAttractions}}>
        {children}
    </AttractionsContext.Provider>
}

export default AttractionsProvider;