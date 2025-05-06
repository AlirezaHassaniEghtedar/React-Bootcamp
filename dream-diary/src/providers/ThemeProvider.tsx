import {PropsWithChildren, ReactNode, useEffect, useState} from "react";

import {ThemeContext} from "../context/theme-context.ts";

import {Theme} from "../types/theme.ts";

import {THEME_LOCAL_STORAGE_KEY} from "../constants/local-storage-keys.ts";

type Props = PropsWithChildren;

export default function ThemeProvider({children}: Props): ReactNode {
    const [theme, setTheme] = useState<Theme>(loadThemeInitialState)

    useEffect(() =>{
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () : void => {
        setTheme(old => old === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function loadThemeInitialState(): Theme {
    const item = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)

    return item === "light" || item === "dark" ? item : "light";
}