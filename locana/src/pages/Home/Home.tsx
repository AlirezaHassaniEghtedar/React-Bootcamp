import {ReactNode} from "react";

import AttractionList from "../../components/AttractionList/AttractionList.tsx";
import Filters from "../../components/Filters/Filters.tsx";

import FiltersProvider from "../../providers/FiltersProvider.tsx";

import styles from "./Home.module.css";

function Home(): ReactNode {

    return (
        <FiltersProvider>
                <div className={styles["home"]}>
                    <Filters/>
                    <AttractionList/>
                </div>
        </FiltersProvider>
    )
}

export default Home;