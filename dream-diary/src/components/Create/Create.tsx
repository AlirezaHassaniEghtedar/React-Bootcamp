import {ReactNode, useRef, FormEvent, Dispatch, SetStateAction} from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import Select from "../Select/Select.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Button from "../Button/Button.tsx";

import styles from "./Create.module.css";

import MingcuteDownFill from "../../icons/MingcuteDownFill.tsx";
import MingcuteAddFill from "../../icons/MingcuteAddFill.tsx";

import {Dream} from "../../types/dream.ts";
import {Vibe} from "../../types/vibe.ts";

type Props = {
    setDreams : Dispatch<SetStateAction<Dream[]>>
}

function Create({setDreams} : Props): ReactNode {
    const dialogRef = useRef<HTMLDialogElement>(null);

    function addButtonClickHandler(): void {
        dialogRef.current?.showModal();
    }

    function cancelButtonClickHandler(): void {
        dialogRef.current?.close();
    }

    function formSubmitHandler (e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        console.log(formData.get('title'))
        console.log(formData.get('description'))
        console.log(formData.get('date'))
        console.log(formData.get('vibe'))

        const dream = {
            id : crypto.randomUUID(),
            title : formData.get('title') as string ,
            description : formData.get('description') as string  ,
            date : new Date(formData.get('date') as string),
            vibe : formData.get('vibe') as Vibe
        }

        setDreams(old => [ ...old , dream])

        dialogRef.current?.close();
    }

    return (
        <div className={styles.create}>
            <Button shape="circle" size="large" onClick={addButtonClickHandler}>
                <MingcuteAddFill/>
            </Button>
            <dialog ref={dialogRef}>
                <form className={styles.content} onSubmit={formSubmitHandler}>
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
                        <Button variant="outlined" onClick={cancelButtonClickHandler}>
                            Cancel
                        </Button>
                        <Button>Apply</Button>
                    </div>
                </form>
            </dialog>
        </div>
    );
}

export default Create;
