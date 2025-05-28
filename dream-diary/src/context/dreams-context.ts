import {createContext, Dispatch, SetStateAction} from "react";

import {Dream} from "../types/dream.ts";
import {VibeFilterSelection} from "../types/vibe-filter-selection.ts";

type DreamsContextValue = {
    dreams: Dream[];
    createDream: (dream: Dream) => void;
    editDream: (dream: Dream) => void;
    removeDream: (id: string) => void;
    filteredDreams: Dream[];
    vibeFilter: VibeFilterSelection;
    setVibeFilter:  Dispatch<SetStateAction<VibeFilterSelection>>;
    handleFilterDreamsList : (vibe : VibeFilterSelection) => void
}

export const DreamsContext = createContext<DreamsContextValue>({
    dreams: [],
    createDream: () => {
    },
    editDream: () => {
    },
    removeDream: () => {
    },
    filteredDreams: [] ,
    vibeFilter: "all" ,
    setVibeFilter: () => {
    },
    handleFilterDreamsList : () => {}
});