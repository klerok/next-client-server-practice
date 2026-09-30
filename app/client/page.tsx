"use client";

import { useState } from "react";
import { greet } from "../actions";

export default function Client() {
  const [message, setMessage] = useState("");

  async function handleClick() {
    setMessage(await greet("Студент"));
  }

  return (
    <div>
      <h1>Client Component</h1>
      <button onClick={handleClick}>Поздороваться</button>
      <p>{message}</p>
    </div>
  );
}
