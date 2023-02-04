import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {



  return <div className="child"
              style={{ backgroundColor: color }} 

              // 3. onClick event listener, pass in prop passed down from Parent 
              onClick={onChangeColor}
          />;
}

export default Child;
