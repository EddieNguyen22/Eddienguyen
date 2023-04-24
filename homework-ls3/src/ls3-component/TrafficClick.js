import React from "react";
import { useState } from "react";

function TrafficClick () {
    const LightColor = [
        "red",
        "yellow",
        "green"];
    const [LightOn, setLight] = useState("yellow");
    let changeColor = () => {
        if (LightOn === "red") {
            setLight("green")
            return;
        }
        if (LightOn === "yellow") {
            setLight("red")
            return;
        }
        if (LightOn === "green"){
            setLight("yellow")
            return;
        }
    };
    return (
    <div>
      <button onClick={changeColor}>
        Next
      </button>
        {LightColor.map((color) => (
        <div className="color-traffic" style={{ backgroundColor: color === LightOn ? color : "white" }} ></div>
      ))}
    </div>
    )
}

export default TrafficClick