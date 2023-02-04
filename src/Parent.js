import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); // initial value for color state

  // 4. store childreColor state in parent, and pass it to Child
  const [childrenColor, setChildrenColor] = useState("#FFF")

  // 1. handle update state variable - color
  function handleColorChange(newChildrenColor) {  // 7. takes in an arg to update childrenColor state
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)  // update color state to a new value
    setChildrenColor(newChildrenColor) // update children color using onClick callback from Child

  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* 2. pass in callback fn as props */}
      <Child onChangeColor={handleColorChange}
             color={childrenColor}  // 6. pass in Children state as prop
      />
      <Child onChangeColor={handleColorChange}
             color={childrenColor}    
        />
    </div>
  );
}

export default Parent;
