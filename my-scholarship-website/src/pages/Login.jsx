import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import logo from '../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="login-logo" />
        </NavLink>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <NavLink to="/forgot-password" className="forgot-password-link">Forgot your password?</NavLink>
          </div>
          <button type="submit" className="login-submit-button">Login</button>
        </form>
        <div className="signup-link">
          <NavLink to="/register" className="signup-link-text">Don't have an account?</NavLink>
        </div>
        <div className="login-options">
          <button className="login-button google-login">
            <FontAwesomeIcon icon={faGoogle} /> Login with Google
          </button>
          <button className="login-button apple-login">
            <FontAwesomeIcon icon={faApple} /> Login with Apple
          </button>
          <button className="login-button email-login">
            Login with Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;