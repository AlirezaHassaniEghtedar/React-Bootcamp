import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

import BackgroundLayer from "../src/components/BackgroundLayer/BackgroundLayer.tsx";
import Header from "../src/components/Header/Header.tsx";
import Toolbar from "../src/components/Toolbar/Toolbar.tsx";
import Result from "../src/components/Result/Result.tsx";

import "./App.css";

import Create from "./components/Create/Create.tsx";
import {Dream} from "./types/dream.ts";

type DreamsContextValue = {
    dreams : Dream[];
    setDreams : Dispatch<SetStateAction<Dream[]>>;
}

export const DreamsContext = createContext<DreamsContextValue>({
    dreams : [] ,
    setDreams : () => {}
});

function App(): ReactNode {
    const [dreams, setDreams] = useState<Dream[]>([
        { id : "1",title: "dream1" , description : "description 1" , date : new Date(2025 , 1 , 14) , vibe : "good" },
        { id : "2",title: "dream2" , description : "description 2" , date : new Date(2025 , 2 , 14) , vibe : "bad" },
        { id : "3",title: "dream3" , description : "description 3" , date : new Date(2025 , 4 , 14) , vibe : "good" },
    ])
    
  return (
    <DreamsContext.Provider value={{dreams , setDreams}}>
      <BackgroundLayer />
      <Header />
      <main>
          <Toolbar />
          <Result/>
      </main>
      <Create/>
    </DreamsContext.Provider>
  );
}

export default App;
