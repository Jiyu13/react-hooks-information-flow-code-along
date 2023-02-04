import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); // initial value for color state

  // 1. handle update state variable - color
  function handleColorChange() {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* 2. pass in callback fn as props */}
      <Child onChangeColor={handleColorChange}/>
      <Child onChangeColor={handleColorChange}/>
    </div>
  );
}

export default Parent;
