import {ReactNode, useEffect, useState} from "react"; 

import AttractionList from "../../components/AttractionList/AttractionList.tsx";

import styles from "./Home.module.css";
import Filters from "../../components/Filters/Filters.tsx";

function Home () : ReactNode {
    const [attractions, setAttractions] = useState([])
    
    useEffect(() => {
        const fetchAttractions = async () : Promise<void> => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/attraction`);
        const data = await response.json();
        setAttractions(data);
        }

        fetchAttractions().then();
    }, []);

    return <div className={styles["home"]}>
        <Filters />
        <AttractionList attractions={attractions}/>
    </div>
}

export default Home;