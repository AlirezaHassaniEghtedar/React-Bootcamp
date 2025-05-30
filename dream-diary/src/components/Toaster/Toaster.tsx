import {ReactNode, useContext} from "react";

import {Bounce, ToastContainer, ToastContainerProps} from "react-toastify";

import {ThemeContext} from "../../context/theme-context.ts";
import {useTranslation} from "react-i18next";

type Props = Partial<ToastContainerProps>;

function Toaster(props: Props): ReactNode {
    const {i18n} =useTranslation()

    const {theme} = useContext(ThemeContext)

    return (<ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={i18n.dir() === "rtl"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
        aria-label={undefined}
        {...props}
    />)
}

export default Toaster;