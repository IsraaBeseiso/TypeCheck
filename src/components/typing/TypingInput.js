import React from "./node_modules/react";
import "./TypingInput.css";

const testStrings = [
  "Type this test as fast as you can.",
  "Type this one even faster if you can.",
];

const TypingInput = () => {
  const [testStringIndex, setTestStringIndex] = React.useState(0);

  const handleCompleteTest = React.useCallback(() => {}, []);

  const handleCheckValidInput = React.useCallback((e) => {
    const { value } = e.target;
    if (value === testStrings[testStringIndex]) {
      // Stop time
      // POST the time to endpoint
      // Increment testStringIndex

      setTestStringIndex(testStringIndex + 1);
    }
  }, []);

  return (
    <div className="home-container">
      <div className="text-container">
        <p>{testStrings[testStringIndex]}</p>
      </div>
      <textarea className="text-area" onChange={handleCheckValidInput} />
    </div>
  );
};

export default TypingInput;
