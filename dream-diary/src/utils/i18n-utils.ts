import {LANGUAGE_LOCAL_STORAGE_KEY} from "../constants/local-storage-keys.ts";

export function getLanguageFromLocalStorage () : string {
    const item = localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY);
    return item === "fa" ? item : "en";
}

export function handleChangeLanguage (language : string) : void {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

    localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY , language)
}