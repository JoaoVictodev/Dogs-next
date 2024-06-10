import React from "react";
import styles from "./input.module.css";
import { error } from "console";

type InputType = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};

const Input = ({ label, error, ...props }: InputType) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.name} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id={props.name}
        {...props}
        className={styles.input}
      ></input>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
