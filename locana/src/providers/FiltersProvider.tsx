import {PropsWithChildren, ReactNode, useState} from "react";

import {FiltersContext} from "../context/filters-context.ts";

import {AttractionTag} from "../types/attractions-tag.ts";
import {Filters as FiltersType} from "../types/filters.ts";

type Props = PropsWithChildren;

function FiltersProvider({children}: Props): ReactNode {
    const [filters, setFilters] = useState<FiltersType>({tags: []})

    const toggleTag = (tag: AttractionTag): void => {
        setFilters(old => {
            const index = old.tags.findIndex(x => x.id === tag.id);

            if (index === -1) {
                return {...old, tags: [...old.tags, tag]}
            }

            const clone = [...old.tags]
            clone.splice(index, 1)
            return {...old, tags: clone}
        })
    }

    return <FiltersContext.Provider value={{filters , toggleTag}}>
        {children}
    </FiltersContext.Provider>
}

export default FiltersProvider;