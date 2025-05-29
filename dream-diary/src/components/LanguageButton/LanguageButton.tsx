import {ReactNode} from "react";

import Button from "../Button/Button.tsx";

import {useTranslation} from "react-i18next";

import TwemojiFlagUnitedKingdom from "../../icons/TwemojiFlagUnitedKingdom.tsx";
import TwemojiFlagIran from "../../icons/TwemojiFlagIran.tsx";

function LanguageButton(): ReactNode {


    const {i18n} = useTranslation()

    return (
        <Button variant="solid" size="large" shape="square"
                onClick={() => i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa")}>
            {i18n.language === "fa" ? <TwemojiFlagUnitedKingdom/> : <TwemojiFlagIran/>}
        </Button>
    )
}

export default LanguageButton;