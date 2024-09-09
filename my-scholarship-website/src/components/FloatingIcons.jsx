import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './FloatingIcons.css'; // Import the CSS file

const FloatingIcons = () => {
  const [showWhatsapp, setShowWhatsapp] = useState(true);
  const [showInstagram, setShowInstagram] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowWhatsapp(prev => !prev);
      setShowInstagram(prev => !prev);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="floating-icons">
      {showWhatsapp && (
        <div className="icon-container">
          <a href="https://wa.me/+917676590656" target="_blank" rel="noopener noreferrer" className="floating-icon whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span className="wave"></span>
          </a>
          <div className="chatbox">Contact us directly</div>
        </div>
      )}
      {showInstagram && (
        <div className="icon-container">
          <a href="https://www.instagram.com/paul_salumu" target="_blank" rel="noopener noreferrer" className="floating-icon instagram">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="wave"></span>
          </a>
          <div className="chatbox">Contact us directly</div>
        </div>
      )}
    </div>
  );
};

export default FloatingIcons;
