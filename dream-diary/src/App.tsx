import { ReactNode } from "react";

import BackgroundLayer from "../src/components/BackgroundLayer/BackgroundLayer.tsx";
import Header from "../src/components/Header/Header.tsx";
import Toolbar from "../src/components/Toolbar/Toolbar.tsx";
import Result from "../src/components/Result/Result.tsx";

import "./App.css";
import Create from "./components/Create/Create.tsx";

function App(): ReactNode {
  return (
    <div>
      <BackgroundLayer />
      <Header />
      <Toolbar />
      <Result />
      <Create />
    </div>
  );
}

export default App;
