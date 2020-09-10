import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-title'>TIME AND CHANCES</div>
        <nav className='header-nav'>
          <ul className='nav-list'>
            <li className='nav-list_item'>
              <Link to='/' className='nav-list_items'>
                Home
              </Link>
            </li>
            <li className='nav-list_item'>
              <Link to='/about' className='nav-list_items'>
                About Me
              </Link>
            </li>
            <li className='nav-list_item'>
              <Link to='/contact' className='nav-list_items'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
