import React from 'react';
import { Redirect } from 'react-router';

export default function StrictAcces(props) {
  const { username, password } = props;
  const welcome = <p>Welcome { username }</p>;

  function checkUser(username, password) {
    if (!username || !password) return false;
    if (username !== 'joao' || password !== '1234') return false;
    return true;
  }

  function login() {
    return welcome;
  }

  return (
    <div>
      { checkUser(username, password) ? login() : <Redirect to="/" /> }
    </div>
  );
}
