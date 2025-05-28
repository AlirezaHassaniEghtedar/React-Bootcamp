import {FormEvent, ReactNode, useContext, useEffect, useState} from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import {MODAL_CONTAINER_ID} from "../../constants/id.ts";

import {DreamsContext} from "../../context/dreams-context.ts";

import MingcuteDownFill from "../../icons/MingcuteDownFill.tsx";

import styles from "./DreamForm.module.css";

import {Vibe} from "../../types/vibe.ts";
import {Dream} from "../../types/dream.ts";
import {toast} from "react-toastify";

type Props = {
    editingDream?: Dream;
    onCancel: VoidFunction;
    onSubmit: VoidFunction;
}

function DreamForm({editingDream, onCancel, onSubmit}: Props): ReactNode {
    const {createDream, editDream} = useContext(DreamsContext)

    const [dream, setDream] = useState<Dream>(generateEmptyDream)

    useEffect(() => {
        setDream(editingDream ? {...editingDream} : generateEmptyDream())
    }, [editingDream]);

    function formSubmitHandler(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        if (!dream.title) {
            toast.error("Title is required." , {containerId : MODAL_CONTAINER_ID})
            return;
        }
        if (!dream.description) {
            toast.error("Description is required." , {containerId : MODAL_CONTAINER_ID})
            return;
        }
        if (!dream.date) {
            toast.error("Date is required." , {containerId : MODAL_CONTAINER_ID})
            return;
        }
        if (!dream.vibe) {
            toast.error("Vibe is required." , {containerId : MODAL_CONTAINER_ID})
            return;
        }

        if (editingDream) {
            editDream(dream)
        } else {
            createDream(dream)
        }

        setDream(generateEmptyDream())

        onSubmit()
    }

    return (
        <form className={styles["create-form"]} onSubmit={formSubmitHandler}>
            <div className={styles.title}>
                {editingDream ? `Edit ${editingDream.title}` : "Create a New Dream"}
            </div>
            <TextInput name='title' placeholder="Input your title ..." value={dream.title}
                       onChange={(e) => setDream((old) => ({...old, title: e.target.value}))}/>
            <TextArea name='description' placeholder="Input your description ..."
                      value={dream.description}
                      onChange={(e) => setDream((old) => ({...old, description: e.target.value}))}/>
            <DateInput name='date' value={dream.date}
                       onChange={(e) => setDream((old) => ({...old, date: e.target.value}))}/>
            <Select name='vibe'
                    variant="outlined"
                    options={[
                        {value: "good", label: "Good"},
                        {value: "bad", label: "Bad"},
                    ]}
                    suffixIcon={<MingcuteDownFill/>}
                    value={dream.vibe} onChange={(e) => setDream((old) => ({...old, vibe: e.target.value as Vibe}))}
            />
            <div className={styles.actions}>
                <Button variant="outlined" type="button" onClick={onCancel}>
                    Cancel
                </Button>
                <Button>
                    {editingDream ? "Edit" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

function generateEmptyDream(): Dream {
    return {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        date: "",
        vibe: "good"
    }
}

export default DreamForm;