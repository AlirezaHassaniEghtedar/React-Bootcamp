import {ReactNode} from "react";

import BackgroundLayer from "../src/components/BackgroundLayer/BackgroundLayer.tsx";
import Header from "../src/components/Header/Header.tsx";
import Toolbar from "../src/components/Toolbar/Toolbar.tsx";
import Result from "../src/components/Result/Result.tsx";
import Create from "./components/Create/Create.tsx";
import Toaster from "./components/Toaster/Toaster.tsx";

import ThemeProvider from "./providers/ThemeProvider.tsx";
import DreamsProvider from "./providers/DreamsProvider.tsx";

import "./App.css";


function App(): ReactNode {
    return (
        <ThemeProvider>
            <DreamsProvider>
                <BackgroundLayer/>
                <Header/>
                <main>
                    <Toolbar />
                    <Result/>
                </main>
                <Create/>
                <Toaster />
            </DreamsProvider>
        </ThemeProvider>
    );
}

export default App;
