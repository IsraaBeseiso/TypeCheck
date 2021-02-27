import React from "react";
import "./TypingBox.css";

const testStrings = [
  "Test string one",
  "Test string two",
  "Test string three",
  "Test string four",
  "Test string five",
];

const Home = () => {
  const [currentTestStringIndex, setCurrentTestStringIndex] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");

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
    <div className="type-checker-container">
      <h1>Type Test</h1>
      <div className="test-string-container">
        <p id="test-string">{testStrings[currentTestStringIndex]}</p>
      </div>
      <textarea
        className="text-area"
        onChange={handleOnStringMatch}
        value={inputValue}
      />
    </div>
  );
};

export default Home;
