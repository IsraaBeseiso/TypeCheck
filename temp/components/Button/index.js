import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

 const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>{
  // const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  // const checkButtonSize = SIZES.include(buttonSize) ? buttonSize : SIZES[0]

  return (
    <>
    <Link to='/Log-in' className='btn-mobile'>
      Start one min Test
     {/* <button
     className={`btn`}>
       {children}
     </button>

     <button>Get Started</button> */}
    </Link>
    </>
  )
};

export default Button;