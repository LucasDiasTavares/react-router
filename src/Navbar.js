import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul className='nav-link '>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
