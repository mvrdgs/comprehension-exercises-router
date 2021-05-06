import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return(
    <header>
      <nav>
        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/users/:id" > Users </Link>
      </nav>
    </header>
  );
}