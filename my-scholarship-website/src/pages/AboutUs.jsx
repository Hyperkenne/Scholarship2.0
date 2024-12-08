import React, { useState, useRef, useEffect } from 'react';
import './AboutUs.css';
import ceoImage from '../assets/CEO1.jpg'; // Ensure the image path is correct

const AboutUs = () => {
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const letterRef = useRef(null);

  const scrollToLetter = () => {
    letterRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLetterVisibility = () => {
    setIsLetterVisible(!isLetterVisible);
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  })

  return (
    <div className="about-us">
      <div className="ceo-section" style={{ backgroundImage: `url(${ceoImage})` }}>
        <div className="ceo-text">
          <h1>A letter from our CEO</h1>
          <p>
            Read about our team's commitment to provide everyone on our global platform
            with the technology that can help them move ahead.
          </p>
          <button className="read-button" onClick={scrollToLetter}>
            Read Dara's letter
          </button>
        </div>
      </div>
      <div ref={letterRef} className="letter-section">
        <button className="toggle-letter-button" onClick={toggleLetterVisibility}>
          {isLetterVisible ? 'Hide Dara\'s letter' : 'Read Dara\'s letter'} ▼
        </button>
        {isLetterVisible && (
          <div className="letter-content">
            <p>
              Dear valued users,
              <br /><br />
              [CEO's letter content goes here...]
              <br /><br />
              Sincerely,
              <br />
              Dara Khosrowshahi
            </p>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>What do we do ?</h3>
          <p>
            We are an  online platform connecting students to vetted scholarship
            opportunities through data-based matching. Our comprehensive database includes
            scholarships from leading non-profits,
            companies, etc.
          </p>
        </div>
        <hr />
        <div className="faq-item">
          <h3>How will Inter Cultural Connections Group help you?</h3>
          <p>
          Inter Cultural Connections Group  helps students save time and money in the process of paying for
            college by matching you to relevant scholarships that are currently accepting
            applications.
          </p>
        </div>
        <hr />
        <div className="faq-item">
          <h3>Is Inter Cultural Connections Group  really free?</h3>
          <p>
          Inter Cultural Connections Group  is 100% free for students.
          </p>
        </div>
        <hr />
        <div className="faq-item">
          <h3>Is Inter Cultural Connections Group  open to international students?</h3>
          <p>
            The Inter Cultural Connections Group  app matches students in India and manyo ther countries to relevant
            scholarship opportunities. We also offer some resources for international students,
            including a <a href="#">guide to studying in the USA</a> and a
            <a href="#">list of vetted scholarships</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
