import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  const { loginBtn, handleInput, username, password } = props;

  return(
    <header>
      <nav>
          <Link to="/" > Home </Link>
          <Link to="/users" > Users </Link>
          <Link to="/about" > About </Link>
          <form className="login-form">
            <label htmlFor="username">
              Login:
              <input name="username" type="text" value={ username } onChange={ handleInput } />
            </label>
            <label htmlFor="password">
              Password:
              <input name="password" type="password" value={ password } onChange={ handleInput } />
            </label>
            <Link to="/strictaccess" >
              <button type="button" onClick={ loginBtn }>Login</button>
            </Link>
          </form>
      </nav>
    </header>
  );
}
