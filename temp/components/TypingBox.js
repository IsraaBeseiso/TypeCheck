import React from 'react';
import Button  from './Button'
import './Typing.css';


function TypingBox() {
  return (
    <div className='typing-container'>
    <h1>Start Your Typing Test</h1>
    <div className="typ-btns">
    <Button className='btns' buttonStyle='btn--outline'
    buttonSize='btn--large'
    >
     GET STARTED
    </Button>
  </div>
  </div>
  );
}

export default TypingBox;