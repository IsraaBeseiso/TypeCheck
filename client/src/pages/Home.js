import React, { useState, useEffect } from "react";
import ChaosScoreTable from "../components/scoretables/ChaosScoreTable";
import NormScoreTable from "../components/scoretables/NormScoreTable";
import { Row, Col } from "reactstrap";
import TypingBox from "../components/TypingBox";
import styles from "../styles/tables.scss"
import TimerDisplay from "../components/TimerDisplay";
// import styles from "client/src/styles/tables.scss";
const txtgen = require("txtgen");


const testStrings = "";
let testString = "";
let testStringInit = "";
let lastPeriod = "";
let userinput = "";
// var timer = "";
let clockTimer = "";
let userLength = "";
let wpm = "";
let trimmedArticle = "";
let errors = "";
let trimmedChaos = "";
let chaosString = "";
let userwpm = "";
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

function Homepage() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [testType, setTestType] = useState()
  // const [currentTestStringIndex, setCurrentTestStringIndex] = useState(0);
  // const [inputValue, setInputValue] = useState("");


  const timer = () => {
    //useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
      displayScore()

    }
    return () => clearInterval(interval);
    // }, [isActive, seconds]);
  }

  // function generateNormTest() {
  //   userwpm = "";
  //   setIsActive(!isActive);
  //   testType = true;
  //   renderTest();
  // }
  // function generateChaosTest() {
  //   //generate random string of 1000 characters cap/lowercase/symbols
  //   userwpm = "";
  //   setIsActive(!isActive);
  //   for (let i = 1; i < 1000; i++) {
  //     let newLetter = charArray[Math.floor(Math.random() * 75)];
  //     chaosString += newLetter;
  //   }

  //   testType = false;
  //renderTest();
  // }
  function testTimer() {
    timer = 60;
    clockTimer = setInterval(function () {
      //if we want to use jquery instead of react to change the html
      //timerLeft.innerHTML = "TimeLeft: " + timer;
      timer--;
      document.getElementById("timestring").innerHTML = timer;
      console.log(timer);
      if (timer === 1) {
        clearInterval(timer);
        timer = 0;
      }
    }, 1000);
    displayScore();
  }

  function displayScore() {
    if (testType) {
      scoreResultsNorm();
    } else {
      scoreResultsChaos();
    }
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

  function renderTest() {
    timer();
    if (testType = true) {
      normTest()
    } else {
      chaosTest()
    }
  }
  function normTest() {
    setTestType(true)

    testStringInit = txtgen.article();
    //trims the article down to 600 characters
    testStringInit = testStringInit.substring(0, 600);

    //trims the article down to the last period
    lastPeriod = testStringInit.lastIndexOf(".");
    testString = testStringInit.substring(0, lastPeriod + 1);
  }

  function chaosTest() {
    setTestType(false)
    let chaosString = "";
    for (let i = 1; i < 500; i++) {
      let newLetter = charArray[Math.floor(Math.random() * 75)];
      //adds a line break every 36 characters
      if (i % 36 === 0) {
        newLetter = "\n";
      }
      chaosString += newLetter;
    }
    testString = chaosString;
  }

  function handleClickChaos() {
    timer();
    chaosTest();
  }

  // function handleChange(event) {
  //   event.preventDefault();
  //   userinput = event.target.value;
  //   if (seconds === 0) {
  //     displayScore()
  //   }



  return (
    <div>
      <Row>
        <Col>
          <NormScoreTable />
        </Col>

        <Col>
          <Row>
            <TimerDisplay
              seconds={seconds}
              normTest={normTest}
              handleClickChaos={handleClickChaos}
            // handleChange={handleChange}

            />
          </Row>
          <Row>
            <TypingBox
              renderTest={renderTest}
              displayScore={displayScore}
              normTest={normTest}
              chaosTest={chaosTest}
            // handleChange={handleChange}
            />

          </Row>
        </Col>

        <Col>
          <ChaosScoreTable />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
