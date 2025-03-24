import { ReactNode } from "react";

import BackgroundLayer from "../src/components/BackgroundLayer/BackgroundLayer.tsx";
import Header from "../src/components/Header/Header.tsx";

import "./App.css";

function App(): ReactNode {
  return (
    <div className="app-container">
      <BackgroundLayer />
      <Header />
    </div>
  );
}

export default App;
