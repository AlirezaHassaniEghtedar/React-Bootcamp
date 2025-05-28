import {ReactNode, useContext} from "react";

import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import MingcuteSearch3Line from "../../icons/MingcuteSearch3Line.tsx";
import MingcuteDownFill from "../../icons/MingcuteDownFill.tsx";
import MingcuteSunLine from "../../icons/MingcuteSunLine.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";

import styles from "./Toolbar.module.css";

import {ThemeContext} from "../../context/theme-context.ts";
import {DreamsContext} from "../../context/dreams-context.ts";


function Toolbar(): ReactNode {
    const {theme , toggleTheme} = useContext(ThemeContext)
    const {vibeFilter , handleFilterDreamsList} = useContext(DreamsContext)
    
  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles["input-container"]}
        placeholder="Search Note ..."
        suffixIcon={<MingcuteSearch3Line />}
      />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
        value={vibeFilter}
        onChange={(e) => handleFilterDreamsList(e.target.value === "good" ? "good" : (e.target.value === "bad" ? "bad" : "all"))}
        suffixIcon={<MingcuteDownFill />}
      />
      <Button variant="solid" size="large" shape="square" onClick={toggleTheme}>
          {theme === "dark" ? <MingcuteSunLine /> : <MingcuteMoonLine />}
      </Button>
    </div>
  );
}

export default Toolbar;
