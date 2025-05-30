import {FormEvent, ReactNode, useContext, useEffect, useState} from "react";

import {useTranslation} from "react-i18next";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import {DreamsContext} from "../../context/dreams-context.ts";

import {validateDream} from "../../validation/dream-validation.ts";

import MingcuteDownFill from "../../icons/MingcuteDownFill.tsx";

import styles from "./DreamForm.module.css";

import {Vibe} from "../../types/vibe.ts";
import {Dream} from "../../types/dream.ts";

type Props = {
    editingDream?: Dream;
    onCancel: VoidFunction;
    onSubmit: VoidFunction;
}

function DreamForm({editingDream, onCancel, onSubmit}: Props): ReactNode {
    const {t} = useTranslation()

    const {createDream, editDream} = useContext(DreamsContext)

    const [dream, setDream] = useState<Dream>(generateEmptyDream)

    useEffect(() => {
        setDream(editingDream ? {...editingDream} : generateEmptyDream())
    }, [editingDream]);

    function formSubmitHandler(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        if (!validateDream(dream)) {
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
                {editingDream
                    ? t("dreams.create.edit", {title: editingDream.title})
                    : t("dreams.create.title")}
            </div>
            <TextInput
                name='title'
                placeholder={t("dreams.form.title.placeholder")}
                value={dream.title}
                onChange={(e) => setDream((old) => ({...old, title: e.target.value}))}/>
            <TextArea
                name='description'
                placeholder={t("dreams.form.description.placeholder")}
                value={dream.description}
                onChange={(e) => setDream((old) => ({...old, description: e.target.value}))}/>
            <DateInput
                name='date'
                value={dream.date}
                placeholder={"mm/dd/yyyy"}
                onChange={(e) => setDream((old) => ({...old, date: e.target.value}))}/>
            <Select name='vibe'
                    variant="outlined"
                    options={[
                        {value: "good", label: t("dreams.form.vibe.good")},
                        {value: "bad", label: t("dreams.form.vibe.bad")},
                    ]}
                    suffixIcon={<MingcuteDownFill/>}
                    value={dream.vibe} onChange={(e) => setDream((old) => ({...old, vibe: e.target.value as Vibe}))}
            />
            <div className={styles.actions}>
                <Button variant="outlined" type="button" onClick={onCancel}>
                    {t("dreams.actions.cancel")}
                </Button>
                <Button>
                    {editingDream ? t("dreams.actions.confirm") : t("dreams.actions.create")}
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