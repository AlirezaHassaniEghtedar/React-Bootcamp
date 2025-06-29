import {forwardRef, ReactNode, useImperativeHandle, useRef} from "react";

import DreamForm from "../DreamForm/DreamForm.tsx";
import Toaster from "../Toaster/Toaster.tsx";

import {Dream} from "../../types/dream.ts"

import {MODAL_CONTAINER_ID} from "../../constants/id.ts";

import styles from "./DreamModal.module.css";

export type DreamModalRef = Pick<HTMLDialogElement, "showModal" | "close">

type Props = {
    editingDream?: Dream
}

const DreamModal = forwardRef<DreamModalRef, Props>(function DreamModal({editingDream}, outerRef): ReactNode {

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

    return <dialog ref={innerRef} className={styles["dream-modal"]}>
        <DreamForm editingDream={editingDream} onCancel={closeModal} onSubmit={closeModal}/>
        <Toaster containerId={MODAL_CONTAINER_ID} />
    </dialog>
})

export default DreamModal;