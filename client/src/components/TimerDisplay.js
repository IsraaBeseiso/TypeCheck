
import React, { useState, useEffect } from "react";
import jquery from "jquery";
import TypingBox from "./TypingBox"
//import txtgen from "txtgen";



// const handleClick = (props) => {
//   console.log("click!!!");
//   generateNormTest()

function timerDisplay(props) {
  return (
    <div className="timer">
      <div className="time">{props.seconds}s</div>
      <div className="row justify-content-center">
      </div>
    </div>
  );
}

export default timerDisplay;


// <button
// className={test-button button-primary text-center 
// onClick={handleClick}
// >
// {isActive ? "" : ""}
//   Normal Mode
// </button>
// {/* <button
//   className="chaos-button"
//   onClick={handleClick}
//   className="chaos-button"
//   onClick={generateChaosTest}
// > */}
//   Chaos Mode
// </button>