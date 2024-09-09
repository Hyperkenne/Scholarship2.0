import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBars, faSignInAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Hnavbar.css';
import logo from '../assets/logo.png';

const Hnavbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
    closeMenu();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="hnavbar">
      <div className="burger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="nav-left">
        <div className="nav-item logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="nav-logo" />
          </NavLink>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-icon active' : 'nav-icon')} onClick={closeMenu}>
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>
              Find Scholarships
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/advice" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>
              Advice
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="#footer" onClick={scrollToFooter} className="nav-item">
              Contact Us
            </a>
          </li>
          <li className="nav-item search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearch}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </li>
          <li className="nav-item">
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Hnavbar;
