import {ReactNode} from "react";

import {Route, Routes} from "react-router";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";

import "./App.css";
import RootLayout from "./layouts/RootLayout/RootLayout.tsx";

function App(): ReactNode {
    return <Routes>
        <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
        </Route>
    </Routes>
}

export default App;
