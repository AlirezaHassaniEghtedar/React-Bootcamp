import {forwardRef, ReactNode, useImperativeHandle, useRef} from "react";

import TaskForm from "../TaskForm/TaskForm.tsx";

import {Dream} from "../../types/dream.ts"

import styles from "./TaskModal.module.css";

export type TaskModalRef = Pick<HTMLDialogElement, "showModal" | "close">

type Props = {
    editingDream?: Dream
}

const TaskModal = forwardRef<TaskModalRef, Props>(function TaskModal({editingDream}, outerRef): ReactNode {

    const innerRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(outerRef, () => ({
        showModal: (): void => {
            innerRef.current?.showModal();
        },
        close: (): void => {
            innerRef.current?.close();
        }
    }))

    function closeModal(): void {
        innerRef.current?.close();
    }

    return <dialog ref={innerRef} className={styles["task-modal"]}>
        <TaskForm editingDream={editingDream} onCancel={closeModal} onSubmit={closeModal}/>
    </dialog>
})

export default TaskModal;