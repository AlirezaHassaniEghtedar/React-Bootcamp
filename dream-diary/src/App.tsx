import { ReactNode } from "react";

import BackgroundLayer from "../src/components/BackgroundLayer/BackgroundLayer.tsx";
import Header from "../src/components/Header/Header.tsx";
import Toolbar from "../src/components/Toolbar/Toolbar.tsx";
import Result from "../src/components/Result/Result.tsx";

import "./App.css";

function App(): ReactNode {
  return (
    <div>
      <BackgroundLayer />
      <Header />
      <Toolbar />
      <Result />
    </div>
  );
}

export default App;
