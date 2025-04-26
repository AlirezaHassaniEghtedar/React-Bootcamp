import {PropsWithChildren, ReactNode, useState} from "react";

import {DreamsContext} from "../context/dreams-context.ts";

import {Dream} from "../types/dream.ts";

type Props = PropsWithChildren;

export default function DreamsProvider({children}: Props): ReactNode {
    const [dreams, setDreams] = useState<Dream[]>([
        {id: "1", title: "dream1", description: "description 1", date: new Date(2025, 1, 14), vibe: "good"},
        {id: "2", title: "dream2", description: "description 2", date: new Date(2025, 2, 14), vibe: "bad"},
        {id: "3", title: "dream3", description: "description 3", date: new Date(2025, 4, 14), vibe: "good"},
    ])

    return (
        <DreamsContext.Provider value={{dreams, setDreams}}>
            {children}
        </DreamsContext.Provider>
    )
}