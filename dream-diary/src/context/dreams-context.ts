import {Dream} from "../types/dream.ts";
import {createContext} from "react";

type DreamsContextValue = {
    dreams : Dream[];
    createDream : (dream : Dream) => void;
    removeDream : (id : string) => void;
}

export const DreamsContext = createContext<DreamsContextValue>({
    dreams : [] ,
    createDream : () => {} ,
    removeDream : () => {}
});