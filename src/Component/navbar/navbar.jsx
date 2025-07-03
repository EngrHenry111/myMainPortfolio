import React from 'react'
import './navbar.css'
import logo from '../../assets/image/logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='navmenu'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>

        </ul>
        <div className="navconnect">Connect With Me</div>
    </div>
  )
}
