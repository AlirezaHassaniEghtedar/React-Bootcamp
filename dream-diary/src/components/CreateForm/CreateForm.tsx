import {Dispatch, FormEvent, ReactNode, SetStateAction} from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import MingcuteDownFill from "../../icons/MingcuteDownFill.tsx";

import styles from "./CreateForm.module.css";

import {Vibe} from "../../types/vibe.ts";
import {Dream} from "../../types/dream.ts";

type Props = {
    setDreams : Dispatch<SetStateAction<Dream[]>>
    onCancel : VoidFunction;
    onSubmit : VoidFunction;
}

function CreateForm({setDreams , onCancel , onSubmit} : Props): ReactNode {
    function formSubmitHandler(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        console.log(formData.get('title'))
        console.log(formData.get('description'))
        console.log(formData.get('date'))
        console.log(formData.get('vibe'))

        const dream = {
            id: crypto.randomUUID(),
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            date: new Date(formData.get('date') as string),
            vibe: formData.get('vibe') as Vibe
        }

        setDreams(old => [...old, dream])

        onSubmit()
    }

    return (
        <form className={styles["create-form"]} onSubmit={formSubmitHandler}>
            <div className={styles.title}>Create a New Dream</div>
            <TextInput name='title' placeholder="Input your title ..."/>
            <TextArea name='description' placeholder="Input your description ..."/>
            <DateInput name='date'/>
            <Select name='vibe'
                    variant="outlined"
                    options={[
                        {value: "good", label: "Good"},
                        {value: "bad", label: "Bad"},
                    ]}
                    suffixIcon={<MingcuteDownFill/>}
            />
            <div className={styles.actions}>
                <Button variant="outlined" onClick={onCancel}>
                    Cancel
                </Button>
                <Button>Apply</Button>
            </div>
        </form>
    )
}

export default CreateForm;