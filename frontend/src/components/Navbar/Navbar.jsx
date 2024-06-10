import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate =useNavigate();

  const goHomePage = () =>{
    navigate('/');
  };
  
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo' />
        <ul className='navbar-menu'>
            <li onClick={goHomePage}>HOME</li>
            <li >ABOUT US</li>
            <li >CONTACT US</li>
        </ul>
        <div className='navbar-right'>
            <button>Sign In</button>
            <img src={assets.log} alt="" className='log'/>
            <img src={assets.cart} alt="" className='cart'/>
        </div>
        
    </div>
  )
}

export default Navbar