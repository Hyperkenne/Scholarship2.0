import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import './Register.css';
import logo from '../assets/logo.png';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');
  const [countryToStudyWork, setCountryToStudyWork] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="register-page">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="register-logo" />
        </NavLink>
      </div>
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="countryOfResidence">Country of Residence</label>
            <input
              type="text"
              id="countryOfResidence"
              value={countryOfResidence}
              onChange={(e) => setCountryOfResidence(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="countryToStudyWork">Country to Study/Work</label>
            <input
              type="text"
              id="countryToStudyWork"
              value={countryToStudyWork}
              onChange={(e) => setCountryToStudyWork(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-submit-button">Register</button>
        </form>
        <div className="login-link">
          <NavLink to="/login" className="login-link-text">Already have an account?</NavLink>
        </div>
        <div className="register-options">
          <button className="register-button google-register">
            <FontAwesomeIcon icon={faGoogle} /> Register with Google
          </button>
          <button className="register-button apple-register">
            <FontAwesomeIcon icon={faApple} /> Register with Apple
          </button>
          <button className="register-button email-register">
            Register with Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
