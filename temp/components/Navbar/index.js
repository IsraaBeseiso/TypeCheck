import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import './style.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)
  const handelClick =() =>setClick(!click);
  const closeMobileMenu =() => setClick(false);
  const showButton =() => {
    if(window.innerWidth <=960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton)
  return ( 
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TypingCheck
        </Link>
        <div className='menu-icon' onClick={handelClick}>
          <i className={click ? 'fa-times' : 'fas fa=bars'} />
        </div>
        <lu className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav=item'>
        <Link to='/home' className='nav-Links' onClick={closeMobileMenu}>
          Home
        </Link>
        </li>
        <li className='nav=item'>
        <Link to='/speeds' className='nav-Links' onClick={closeMobileMenu}>
          Speeds
        </Link>
        </li>
        <li className='nav=item'>
        <Link to='/good-bye' className='nav-Links' onClick={closeMobileMenu}>
          Good Bye
        </Link>
        </li>
        <li className='nav=item'>
        <Link to='/sign-up' className='nav-Links-mobile' onClick={closeMobileMenu}>
          Sign Up
        </Link>
        </li>
        </lu>
      </div>
    </nav>
    </>
  )
}

export default Navbar
