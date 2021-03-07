import React, { useState, useEffect } from "react";
import styles from "../../styles/tables.scss";
//import Timer from "./Timer"
const txtgen = require("txtgen");

const testStrings = "";
let testString = "";
let testStringInit = "";
let lastPeriod = "";
let userinput = "";
var timer = "";
let clockTimer = "";
let userLength = "";
let wpm = "";
let trimmedArticle = "";
let errors = "";
let trimmedChaos = "";
let chaosString = "";
let userwpm = "";

const TypingBox = () => {
  const [currentTestStringIndex, setCurrentTestStringIndex] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");

  var charArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#",
    "%",
    "^",
    "&",
    "*",
    ".",
    "~",
    "|",
    "_",
    "+",
    "=",
  ];

  var testType;

  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  function generateNormTest() {
    userwpm = "";
    setIsActive(!isActive);
    testType = true;
    renderTest();
  }

  function generateChaosTest() {
    //generate random string of 1000 characters cap/lowercase/symbols
    userwpm = "";
    setIsActive(!isActive);

    for (let i = 1; i < 1000; i++) {
      let newLetter = charArray[Math.floor(Math.random() * 75)];
      chaosString += newLetter;
    }

    testType = false;
    renderTest();
  }

  // useEffect(() => {
  //   let interval = null;
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds((seconds) => seconds - 1);
  //     }, 1000);
  //   } else if (!isActive && seconds !== 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive, seconds]);

  function renderTest() {
    testTimer();
    if (testType) {
      testStringInit = txtgen.article();
      //trims the article down to 600 characters
      testStringInit = testStringInit.substring(0, 600);

      //trims the article down to the last period
      lastPeriod = testStringInit.lastIndexOf(".");
      testString = testStringInit.substring(0, lastPeriod + 1);
    } else {
      let chaosString = "";
      for (let i = 1; i < 500; i++) {
        let newLetter = charArray[Math.floor(Math.random() * 75)];

        //adds a line break every 36 characters
        if (i % 45 === 0) {
          newLetter = "\n";
        }
        chaosString += newLetter;
      }
      //document.getElementByIdName("test-string").style.overflowWrap = "break-word"; -doesn't work in React
      //If we want figure out how to set the css to overflow-wrap : break-word for chaosString and overflow-wrap: normal for normal mode
      testString = chaosString;
    }

    //could maybe put the timer functionality here

    //getting the value of the textarea
    userinput = document.getElementById("userinput").value;
    console.log(userinput);
  }

  //does the countdown
  function testTimer() {
    timer = 60;
    clockTimer = setInterval(function () {
      //if we want to use jquery instead of react to change the html
      //timerLeft.innerHTML = "TimeLeft: " + timer;
      timer--;
      document.getElementById("timestring").innerHTML = timer;
      console.log(timer);
      if (timer === 0) {
        clearInterval(clockTimer);
        timer = 0;
        if (testType) {
          scoreResultsNorm();
        } else {
          scoreResultsChaos();
        }

        //put when time is out function name here
      }
    }, 1000);
    //input_area.disabled = true;
  }

  function scoreResultsNorm() {
    //scores results of a normal test

    userinput = document.getElementById("userinput").value;
    console.log(userinput);
    userLength = userinput.length;

    wpm = 0;
    errors = 0;
    //trims the article down the how many character the user typed so they can be compared character by character
    trimmedArticle = testString.substring(0, userLength);

    for (let i = 0; i < userinput.length; i++) {
      //counts the number of spaces in the original trimmed article and that is your word count
      if (trimmedArticle[i] === " ") {
        wpm++;
      }
    }
    for (let i = 0; i < userinput.length; i++) {
      if (userinput[i] != trimmedArticle[i]) {
        errors++;
        //if we want to subtract score
        wpm--;
      }
    }
    console.log("wpm" + wpm);
    userwpm = "your wpm is: " + wpm;
    console.log(userwpm);
  }

  function scoreResultsChaos() {
    //scores the results of a chaos test
    wpm = 0;
    errors = 0;

    userinput = document.getElementById("userinput").value;
    console.log(userinput);
    userLength = userinput.length;

    //removing the linebreaks
    trimmedChaos = testString.replace(/(\r\n|\n|\r)/gm, "");

    //trims the prompt down the how many character the user typed so they can be compared character by character
    trimmedChaos = trimmedChaos.substring(0, userLength);

    wpm = userLength;
    console.log("wpm1 " + wpm);
    console.log(trimmedChaos);

    for (let i = 0; i < userinput.length; i++) {
      if (userinput[i] != trimmedChaos[i]) {
        errors++;
        //if we want to subtract score
        wpm--;
      }
    }
    console.log("wpm2 " + wpm);
    userwpm = "your wpm is: " + wpm;
    console.log(userwpm);
  }

  const handleOnStringMatch = React.useCallback(
    (event) => {
      const { value } = event.target;

      if (value === testStrings[currentTestStringIndex]) {
        setInputValue(value);
        // Instead of using setTimout this is where you'd make a POST request
        // to your backend endpoint to save the "time".
        setTimeout(() => {
          setInputValue("");
          setCurrentTestStringIndex(
            currentTestStringIndex < testStrings.length - 1
              ? currentTestStringIndex + 1
              : 0
          );
        }, 1000);
      } else {
        setInputValue(value);
      }
    },
    [currentTestStringIndex]
  );

  return (
    <div>
      <div className="timer col-md-12">
        {/* <div className="time">{timer}s</div> */}
        {/* <div className="time-string-container"> */}
        <p id="timestring">{timer}</p>
        {/* </div> */}

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
            className="chaos-button"
            onClick={generateChaosTest}
          >
            Chaos Mode
          </button>
        </div>
      </div>

      <div className="type-checker-container col-md-12">
        <h1 classname="mode">Typing Test</h1>
        <div className="test-string-container bg-white col-md-12">
          <p id="test-string">{testString}</p>
        </div>
        <p id="userwpm">{userwpm}</p>
        <textarea
          className="text-area col-md-12 read-only"
          style={{ width: "100%", height: "200px" }}
          id="userinput"
          onChange={handleOnStringMatch}
          //just to make the field editable for now

          value={inputValue}
        />
      </div>
    </div>
  );
};

export default TypingBox;