import {ReactNode, useContext, useEffect, useRef} from "react";

import Button from "../Button/Button.tsx";
import CreateForm from "./components/CreateForm/CreateForm.tsx";

import styles from "./Create.module.css";

import MingcuteAddFill from "../../icons/MingcuteAddFill.tsx";
import {DreamsContext} from "../../context/dreams-context.ts";

function Create(): ReactNode {
    const {editingDream , setEditingDream} = useContext(DreamsContext)

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(editingDream) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close();
        }
    }, [editingDream]);

    function addButtonClickHandler(): void {
        dialogRef.current?.showModal();
    }

    function closeModal(): void {
        dialogRef.current?.close();
        setEditingDream(null)
    }

    return (
        <div className={styles.create}>
            <Button shape="circle" size="large" onClick={addButtonClickHandler}>
                <MingcuteAddFill/>
            </Button>
            <dialog ref={dialogRef}>
                {editingDream && <CreateForm onCancel={closeModal} onSubmit={closeModal}/>}
                {!editingDream && <CreateForm onCancel={closeModal} onSubmit={closeModal}/>}
            </dialog>
        </div>
    );
}

export default Create;
