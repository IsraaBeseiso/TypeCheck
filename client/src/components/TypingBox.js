import React, { useState, useEffect } from "react";
import styles from "../styles/tables.scss";
//import Timer from "./Timer"
const txtgen = require("txtgen");


function typingBox(props) {

  //function txtgen() {
  // const handleOnStringMatch = React.useCallback(
  //   (event) => {
  //     const { value } = event.target;

  //     if (value === testStrings[currentTestStringIndex]) {
  //       setInputValue(value);
  //       // Instead of using setTimout this is where you'd make a POST request
  //       // to your backend endpoint to save the "time".
  //       setTimeout(() => {
  //         setInputValue("");
  //         setCurrentTestStringIndex(
  //           currentTestStringIndex < testStrings.length - 1
  //             ? currentTestStringIndex + 1
  //             : 0
  //         );
  //       }, 1000);
  //     } else {
  //       setInputValue(value);
  //     }
  //   },
  //   [currentTestStringIndex]
  // );
  //}


  return (
    <>
      <div>
        {/* <div className="timer col-md-12">
      {/* <div className="time">{timer}s</div> */}
        {/* <div className="time-string-container"> */}
        {/* <p id="timestring">{props.timer}</p> */}


        <div className="row justify-content-center">
          <button
            className={"test-button"}
            id="norm-button"
            // props.isActive ? "active" : "inactive"
            // }`
            onClick={props.normTest}
          >
            {/* // {isActive ? "" : ""} */}
          Normal Mode
        </button>
          <button
            // className="chaos-button" onClick={this.handleClick}>
            className="test-button"
            id="chaos-button"
            onClick={props.chaosTest}>
            Chaos Mode
          </button>
        </div>


        <div className="type-checker-container fluid" >
          <h1 className="mode">Typing Test</h1>
          <label>Type Here!</label>
          <input
            type="textarea"
            name="userinput"
            style={{ width: "100%", height: "300px" }}
            onChange={props.handleClickChaos}
          />

          {/* <div className="test-string-container col-md-12"> */}

          {/* <p id="test-string">{testString}</p>
      </div>
      <p id="userwpm">{userwpm}</p>

      <textarea
        className="text-area col-md-12"
        id="userinput"
        onChange={handleOnStringMatch}
        //just to make the field editable for now

        value={inputValue}
      /> */}
        </div>
      </div>
    </>
  );
}
export default typingBox;
