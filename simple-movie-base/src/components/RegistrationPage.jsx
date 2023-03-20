import React, { useState } from 'react';
import './Login.css';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send user's information to server for registration
    // TODO: Redirect user to login page if registration is successful
    // TODO: Display error message if registration fails
  };
  return (
    <div>
    
  <div className="register-form">
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Username:</label>
            <br/>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <br/>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password">Confirm password:</label>
            <br/>
            <input
                type="password"
                id="confirmPassword"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </div>
        <div>
            <label>
                <input type="checkbox" />
                    Should have admin rights?
            </label>
        </div>
        <button type="submit" className="button">Register</button>
    </form>
    </div>
    </div>
  );
}
export default RegistrationPage;