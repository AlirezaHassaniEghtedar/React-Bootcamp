import {ReactNode, useRef, Dispatch, SetStateAction} from "react";

import Button from "../Button/Button.tsx";
import CreateForm from "../CreateForm/CreateForm.tsx";

import styles from "./Create.module.css";

import MingcuteAddFill from "../../icons/MingcuteAddFill.tsx";

import {Dream} from "../../types/dream.ts";

type Props = {
    setDreams : Dispatch<SetStateAction<Dream[]>>
}

function Create({setDreams} : Props): ReactNode {
    const dialogRef = useRef<HTMLDialogElement>(null);

    function addButtonClickHandler(): void {
        dialogRef.current?.showModal();
    }

    function closeModal() : void {
        dialogRef.current?.close();
    }

    return (
        <div className={styles.create}>
            <Button shape="circle" size="large" onClick={addButtonClickHandler}>
                <MingcuteAddFill/>
            </Button>
            <dialog ref={dialogRef}>
                <CreateForm setDreams={setDreams} onCancel={closeModal} onSubmit={closeModal} />
            </dialog>
        </div>
    );
}

export default Create;
