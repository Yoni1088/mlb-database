import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div>
        <ul className='flex-container'>
            <li id='Home'>
              <Link className='a' to="/">Home</Link>
            </li>  
            <li className='cf'>
              <Link className='Link' to='/current-franchise'>Current Franchise</Link>
            </li>
            <li className='fh'>
              <Link className='Link' to='/franchise-history'>Franchise history</Link>
            </li>
            <input id='search' type="text" placeholder="Search.."></input>
        </ul>

    </div>
  )
}
