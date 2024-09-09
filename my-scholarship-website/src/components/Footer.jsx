import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Replace with the actual path to your logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Scholarships360 Logo" className="footer-logo" />
        <div className="footer-social">
          <a href="https://www.facebook.com/Paul Salumu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/paul_salumu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          </a>
          <a href="https://wa.me/+917676590656" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="footer-icon" />
          </a>
          <a href="mailto:kennedybenard73@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
          </a>
          <a href="https://t.me/InterCultural Connections Group" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} className="footer-icon" />
          </a>
          <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 InterCultural Connection Group. All rights reserved.</p>
        <p>
          <a href="/scholarship-rules">Scholarship Rules</a> | 
          <a href="/terms-of-service">Terms of Service</a> | 
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
