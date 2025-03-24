import { ReactNode } from "react";

import TextInput from "../TextInput/TextInput.tsx";

import MingcuteSearch3Line from "../../icons/MingcuteSearch3Line.tsx";

import styles from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search Note ..."
        suffixIcon={<MingcuteSearch3Line />}
      />
      <select name="" id=""></select>
      <button>DarkLight Mode</button>
    </div>
  );
}

export default Toolbar;
