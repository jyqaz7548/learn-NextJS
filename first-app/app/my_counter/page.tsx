"use client";
import Nevbar from "@/components/nevbar";
import styles from "./detail.module.css";
import { useState } from "react";

export default function counter() {
  const [value, setValue] = useState(100);

  const plus = () => {
    setValue(value + 1);
  };

  const minus = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };

  const multiply = () => {
    setValue(value * 2);
  };

  const division = () => {
    setValue(value / 2);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>{value}</h1>
        <div className={styles.button}>
          <button onMouseDown={plus}>+</button>
          <button onMouseDown={minus}>-</button>
          <button onClick={multiply}>x</button>
          <input type="text" placeholder="입력해라" />
          <button onClick={division}>÷</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </>
  );
}

//ㅇㅇ
