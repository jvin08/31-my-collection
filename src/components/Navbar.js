import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/*<img src="../author.jpg" alt='author' id='author'/>*/}
      <div className='nav-center'>

        <NavLink to="/">
          <img src="../logo.png" alt='project db log'/>
        </NavLink>
        <ul className='nav-links'>
          <li>
            <NavLink to="/">
              <BiHomeAlt2 />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <AiOutlineInfoCircle />
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
