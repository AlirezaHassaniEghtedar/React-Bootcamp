import {PropsWithChildren, ReactNode, useEffect, useState} from "react";

import {toast} from "react-toastify";

import {DREAMS_LOCAL_STORAGE_KEY} from "../constants/local-storage-keys.ts";

import {DreamsContext} from "../context/dreams-context.ts";

import {Dream} from "../types/dream.ts";
import {VibeFilterSelection} from "../types/vibe-filter-selection.ts";

type Props = PropsWithChildren;

export default function DreamsProvider({children}: Props): ReactNode {
    const [dreams, setDreams] = useState<Dream[]>(loadDreamsInitialState);
    const [filteredDreams, setFilteredDreams] = useState<Dream[]>(dreams);
    const [vibeFilter, setVibeFilter] = useState<VibeFilterSelection>("all");

    useEffect(() => {
        localStorage.setItem(DREAMS_LOCAL_STORAGE_KEY, JSON.stringify(dreams))
    }, [dreams]);

    const createDream = (dream: Dream): void => {
        setDreams(old => {
            const updatedDreams = [...old, {...dream}];

            setFilteredDreams(updatedDreams);
            return updatedDreams;
        })
        toast.success("Dream created successfully.")
    }

    const editDream = (dream: Dream): void => {
        setDreams((old) => {
            const updatedDreams = old.map((x) => (x.id === dream.id ? {...dream} : x));

            setFilteredDreams(updatedDreams);
            return updatedDreams;
        })
        toast.success("Dream edited successfully.")
    };

    const removeDream = (id: string): void => {
        setDreams(old => {
            const updatedDreams = old.filter(x => x.id !== id);

            setFilteredDreams(updatedDreams)
            return updatedDreams
        })
        toast.success("Dream removed successfully.")
    }

    const handleFilterDreamsList = (vibe: VibeFilterSelection): void => {
        setVibeFilter(vibe)

        if (vibe === "all") {
            setFilteredDreams(dreams)
            return;
        }
        setFilteredDreams([...dreams].filter(dream => dream.vibe === vibe))
        console.log("dreams : ")
        console.log(dreams)
    }

    return (
        <DreamsContext.Provider value={{
            dreams,
            createDream,
            editDream,
            removeDream,
            filteredDreams,
            vibeFilter,
            setVibeFilter,
            handleFilterDreamsList
        }}>
            {children}
        </DreamsContext.Provider>
    )
}

function loadDreamsInitialState(): Dream[] {
    const item = localStorage.getItem(DREAMS_LOCAL_STORAGE_KEY)

    if (!item) {
        return []
    }

    return JSON.parse(item);
}