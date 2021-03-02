import React, { useState, useEffect } from "react";
//import txtgen from "txtgen";


const txtgen = require('txtgen');
//let article;
var chaosString = "";
var charArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "%", "^", "&", "*", ".", "~", "|", "_", "+", "="];

var testType


const Timer = () => {


  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  // class generateNormTest extends React.Component {
  //   state = {
  //     article: article
  //   }
  // }


    function generateNormTest() {
    setIsActive(!isActive);
    const article = txtgen.article();
    console.log(article);
    testType = true;
  }

 


// handleClick() => {
   //this.setState


// }

  function generateChaosTest() {
    //generate random string of 1000 characters cap/lowercase/symbols
    setIsActive(!isActive);
 let chaosString = "";
    for (let i = 1; i < 1000; i++) {
        let newLetter = charArray[Math.floor(Math.random() * 75)];
        chaosString += newLetter;
    }
    console.log(chaosString);
    testType = false;
  }
  // function reset() {
  //   setSeconds(0);
  //   setIsActive(false);
  // }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);



  return (
    <div className="app col-md-2 ml-5 border text-center">
      <div className="time">{seconds}s</div>
      <div className="row justify-content-center">
        <button
          className={` norm-button button-primary text-center button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={generateNormTest}
        >
          {isActive ? "" : ""}
          Normal Mode
        </button>
        <button 
        // className="chaos-button" onClick={this.handleClick}>
                  className="chaos-button" onClick={generateChaosTest}>
      Chaos Mode
        </button>
      </div>
    </div>
  );
};


export default Timer;