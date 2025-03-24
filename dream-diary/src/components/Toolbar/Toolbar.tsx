import { ReactNode } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";

import MingcuteSearch3Line from "../../icons/MingcuteSearch3Line.tsx";

import styles from "./Toolbar.module.css";
import MingcuteDownFill from "../../icons/MingcuteDownFill.tsx";

function Toolbar(): ReactNode {
  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search Note ..."
        suffixIcon={<MingcuteSearch3Line />}
      />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
        suffixIcon={<MingcuteDownFill />}
      />
      <button>DarkLight Mode</button>
    </div>
  );
}

export default Toolbar;
