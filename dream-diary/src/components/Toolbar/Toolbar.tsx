import {ReactNode, useContext, useState} from "react";

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

import {VibeFilterSelection} from "../../types/vibe-filter-selection.ts";


function Toolbar(): ReactNode {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const {vibeFilter, handleFilterDreamsList, setVibeFilter} = useContext(DreamsContext)

    const [searchDreams, setSearchDreams] = useState<string>("")

    const filterDreams = (vibe: VibeFilterSelection, searchDreams: string) => {
        handleFilterDreamsList(vibe, searchDreams)
    }

    return (
        <div className={styles.toolbar}>
            <TextInput
                className={styles["input-container"]}
                placeholder="Search Note ..."
                suffixIcon={<MingcuteSearch3Line/>}
                value={searchDreams}
                onChange={(e) => {
                    const upgradedTextInputValue = e.target.value

                    setSearchDreams(upgradedTextInputValue)
                    filterDreams(vibeFilter, upgradedTextInputValue)
                }}
            />
            <Select
                options={[
                    {value: "all", label: "All"},
                    {value: "good", label: "Good"},
                    {value: "bad", label: "Bad"},
                ]}
                value={vibeFilter}
                onChange={(e) => {
                    const upgradedSelectOptionValue = e.target.value

                    if (upgradedSelectOptionValue === "good" || upgradedSelectOptionValue === "bad" || upgradedSelectOptionValue === "all") {
                        setVibeFilter(upgradedSelectOptionValue)
                        filterDreams(upgradedSelectOptionValue, searchDreams)
                    }
                }}
                suffixIcon={<MingcuteDownFill/>}
            />
            <Button variant="solid" size="large" shape="square" onClick={toggleTheme}>
                {theme === "dark" ? <MingcuteSunLine/> : <MingcuteMoonLine/>}
            </Button>
        </div>
    );
}

export default Toolbar;
