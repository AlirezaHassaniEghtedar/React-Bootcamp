import {ReactNode, useContext, useRef, useState} from "react";

import Button from "../Button/Button.tsx";
import DreamModal, {DreamModalRef} from "../DreamModal/DreamModal.tsx";

import {DreamsContext} from "../../context/dreams-context.ts";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import {Dream} from "../../types/dream.ts"

import styles from "./Result.module.css";

function Result(): ReactNode {
    const {removeDream , filteredDreams} = useContext(DreamsContext)

    const [editingDream, setEditingDream] = useState<Dream | null>(null)

    const modalRef = useRef<DreamModalRef>(null)

    const editButtonClickHandler = (dream : Dream) : void => {
        setEditingDream(dream)
        modalRef.current?.showModal();
    }

    return (<>
            <ul className={styles.result}>
                {filteredDreams.map((dream) => (
                    <li key={dream.title}>
                        <div className={styles.title}>{dream.title}</div>
                        <div className={styles.actions}>
                            <Button color="primary" variant="ghost" size="small" shape="square"
                                    onClick={() => editButtonClickHandler(dream)}>
                                <MingcuteEdit2Line/>
                            </Button>
                            <Button color="danger" variant="ghost" size="small" shape="square"
                                    onClick={() => removeDream(dream.id)}>
                                <MingcuteDelete2Line/>
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
            <DreamModal ref={modalRef} editingDream={editingDream ?? undefined}/>
        </>
    );
}

export default Result;