import {createContext} from "react";

import {Filters} from "../types/filters.ts";
import {AttractionTag} from "../types/attractions-tag.ts";

type FiltersContextValue = {
    filters : Filters;
    toggleTag : (tag : AttractionTag) => void;
}

export const FiltersContext = createContext<FiltersContextValue>({
    filters : {
        tags : []
    } ,
    toggleTag : () => {}
});