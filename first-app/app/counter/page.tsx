"use client";

import { useState } from "react";

export default function counter() {
  const [value, setValue] = useState(0);

  // + > +1
  const plus = () => {
    setValue(value + 1);
  };
  // - > -1
  const minus = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };
  // reset > 0
  const reset = () => {
    setValue(0);
  };
  // 음수 막기

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
