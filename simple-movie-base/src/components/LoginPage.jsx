import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import RegistrationPage from './RegistrationPage';
import { NavLink } from 'react-router-dom';

// async function loginUser(credentials) {
//  return fetch('http://localhost:8080/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

export default function LoginPage({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
    // setToken(token);
  }

  return(
    <div className="container">
    <div className="auth-form-container">
        <h1 className="container">Welcome to our Movies App! <br/>
            Please authorize to proceed.
        </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" className="button">Submit</button>
        </div>
        <div>Don't have an account - <NavLink to="/register">Sign up</NavLink> for free.</div>
      </form>
    </div>
    </div>
  )
}

// LoginPage.propTypes = {
//   setToken: PropTypes.func.isRequired
// };