import {FormEvent, ReactNode, useContext} from "react";

import TextInput from "../../../TextInput/TextInput.tsx";
import TextArea from "../../../TextArea/TextArea.tsx";
import DateInput from "../../../DateInput/DateInput.tsx";
import Select from "../../../Select/Select.tsx";
import Button from "../../../Button/Button.tsx";

import {DreamsContext} from "../../../../context/dreams-context.ts";

import MingcuteDownFill from "../../../../icons/MingcuteDownFill.tsx";

import styles from "./CreateForm.module.css";

import {Vibe} from "../../../../types/vibe.ts";

type Props = {
    onCancel: VoidFunction;
    onSubmit: VoidFunction;
}

function CreateForm({onCancel, onSubmit}: Props): ReactNode {
    const {createDream ,editDream, editingDream} = useContext(DreamsContext)

    function formSubmitHandler(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        console.log(formData.get('title'))
        console.log(formData.get('description'))
        console.log(formData.get('date'))
        console.log(formData.get('vibe'))

        const dream = {
            id: editingDream?.id ?? crypto.randomUUID(),
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            date: new Date(formData.get('date') as string),
            vibe: formData.get('vibe') as Vibe
        }

        if(editingDream) {
            editDream(dream)
        } else {
        createDream(dream)
        }

        onSubmit()
    }

    return (
        <form className={styles["create-form"]} onSubmit={formSubmitHandler}>
            <div className={styles.title}>Create a New Dream</div>
            <TextInput name='title' placeholder="Input your title ..." defaultValue={editingDream?.title}/>
            <TextArea name='description' placeholder="Input your description ..." defaultValue={editingDream?.description}/>
            <DateInput name='date' defaultValue={toDateString(editingDream?.date)}/>
            <Select name='vibe'
                    variant="outlined"
                    options={[
                        {value: "good", label: "Good"},
                        {value: "bad", label: "Bad"},
                    ]}
                    suffixIcon={<MingcuteDownFill/>}
                    defaultValue={editingDream?.vibe}
            />
            <div className={styles.actions}>
                <Button variant="outlined" type="button" onClick={onCancel}>
                    Cancel
                </Button>
                <Button>Apply</Button>
            </div>
        </form>
    )
}

function toDateString(date : Date | undefined) : string {
    if(!date) return "";

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function pad(text : number) : string {
    return text.toString().padStart(2 , "0");
}

export default CreateForm;