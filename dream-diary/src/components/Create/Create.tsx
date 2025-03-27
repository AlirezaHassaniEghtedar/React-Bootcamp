import { ReactNode, useRef } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import Button from "../Button/Button.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import Select from "../Select/Select.tsx";
import DateInput from "../DateInput/DateInput.tsx";

import styles from "./Create.module.css";

import MingcuteDownFill from "../../icons/MingcuteDownFill.tsx";
import MingcuteAddFill from "../../icons/MingcuteAddFill.tsx";

function Create(): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function addButtonClickHandler(): void {
    dialogRef.current?.showModal();
  }

  function cancelButtonClickHandler(): void {
    dialogRef.current?.close();
  }

  return (
    <div className={styles.create}>
      <Button shape="circle" size="large" onClick={addButtonClickHandler}>
        <MingcuteAddFill />
      </Button>
      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>Create a New Dream</div>
          <TextInput placeholder="Input your title ..." />
          <TextArea placeholder="Input your description ..." />
          <DateInput />
          <Select
            variant="outlined"
            options={[
              { value: "good", label: "Good" },
              { value: "bad", label: "Bad" },
            ]}
            suffixIcon={<MingcuteDownFill />}
          />
          <div className={styles.actions}>
            <Button variant="outlined" onClick={cancelButtonClickHandler}>
              Cancel
            </Button>
            <Button>Apply</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Create;
