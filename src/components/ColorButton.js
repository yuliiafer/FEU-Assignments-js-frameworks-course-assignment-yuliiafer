import { ComponentHeartFull } from "./Icons";
import { useState } from "react";

export default function ColorButton() {
  const [color, setColor] = useState(false);

  function increment() {
    setColor(!color);
  }

  return (
    <button className="heart" onClick={increment}>
      {color ? "❤️" : <ComponentHeartFull />}
    </button>
  );
}
