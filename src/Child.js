import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {

  function handleClick() {
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }


  return <div className="child"
              style={{ backgroundColor: color }} 

              // 3. onClick event listener, pass in prop passed down from Parent 
              onClick={handleClick}
          />;
}

export default Child;
