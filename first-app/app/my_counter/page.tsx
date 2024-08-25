"use client";
import Navbar from "@/components/nevbar";
import styles from "./detail.module.css";
import { use, useState } from "react";

export default function counter() {
  const [value, setValue] = useState(0);

  const plus = () => {
    setValue(value + 1);
  };

  const not = () => {
    setValue(value);
  };

  const minus = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>{value}</h1>
        <div className={styles.button}>
          <button onMouseDown={plus} onMouseUp={not}>
            +
          </button>
          <button onMouseDown={minus}>-</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </>
  );
}
