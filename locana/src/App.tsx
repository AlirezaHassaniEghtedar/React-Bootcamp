import {ReactNode} from "react";

import {Route, Routes} from "react-router";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

import "./App.css";
import RootLayout from "./layouts/RootLayout/RootLayout.tsx";

function App(): ReactNode {
    return <Routes>
        <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<NotFound />}/>
        </Route>
    </Routes>
}

export default App;
