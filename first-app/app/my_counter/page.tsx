"use client";
import Nevbar from "@/components/nevbar";
import styles from "./detail.module.css";
import { useState } from "react";

export default function counter() {
  const [value, setValue] = useState(0);

  const plus = () => {
    setValue(value + 100);
  };

  const minus = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };

  const multiply = () => {
    const input = prompt("곱할 수 입력:");
    const number = Number(input);
    if (!isNaN(number)) {
      setValue(value * number);
    } else {
      alert("유효한 숫자를 입력해주세요.");
    }
  };

  const division = () => {
    const input2 = prompt("나눌 수 입력:");
    const number2 = Number(input2);
    if (!isNaN(number2) && number2 !== 0) {
      setValue(value / number2);
    } else {
      alert("유효한 숫자를 입력해주세요.");
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
          <button onMouseDown={plus}>+</button>
          <button onMouseDown={minus}>-</button>
          <button onClick={multiply}>x</button>
          <button onClick={division}>÷</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </>
  );
}

//ㅇㅇ
