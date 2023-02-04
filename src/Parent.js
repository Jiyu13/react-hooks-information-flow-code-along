import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function handleColorChange() {
    const newColor = getRandomColor()
    setColor(newColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onClick={handleColorChange}/>
      <Child onClick={handleColorChange}/>
    </div>
  );
}

export default Parent;
