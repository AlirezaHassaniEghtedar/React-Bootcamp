import {ReactNode, useRef} from "react";

import Button from "../Button/Button.tsx";
import TaskModal, {TaskModalRef} from "../TaskModal/TaskModal.tsx";

import styles from "./Create.module.css";

import MingcuteAddFill from "../../icons/MingcuteAddFill.tsx";

function Create(): ReactNode {
    const modalRef = useRef<TaskModalRef>(null);

    function addButtonClickHandler(): void {
        modalRef.current?.showModal();
    }

    return (
        <div className={styles.create}>
            <Button shape="circle" size="large" onClick={addButtonClickHandler}>
                <MingcuteAddFill/>
            </Button>
            <TaskModal ref={modalRef}/>
        </div>
    );
}

export default Create;
