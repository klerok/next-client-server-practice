"use client";

import { useState } from "react";

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);
  function handleClick() {
    setAdded(true);
  }
  return (
    <button onClick={handleClick} disabled={added}>
      {added ? "Добавлено!" : "В корзину"}
    </button>
  );
}
