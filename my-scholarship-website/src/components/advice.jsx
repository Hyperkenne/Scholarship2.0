import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './advice.css';
import Hnavbar from '../components/Hnavbar';
import Footer from '../components/Footer';
import heroImage from '../assets/advice.jpg'; // Ensure to replace 'admissionHeroImage.jpg' with the actual image file name
import FloatingIcons from './FloatingIcons'; // Import the FloatingIcons component
// Example collaboration photos
import collabPhoto1 from '../assets/collabPhoto1.jpg';
import collabPhoto2 from '../assets/collabPhoto2.jpg';
import collabPhoto3 from '../assets/collabPhoto3.jpg';

// Photos for the new section
import admissionPhoto from '../assets/admissionPhoto.jpg';
import financialAidPhoto from '../assets/financialAidPhoto.jpg';

const Advice = () => {
  return (
    <div className="advice">
      <Hnavbar />
      <div className="hero-section">
        <div className="hero-text">
          <h1>College admissions from front to back</h1>
          <p>Whether you’re looking to improve your SAT scores or you just can’t decide between two colleges, we’ve got your back. Let us walk you through each step of the admissions process.</p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="College students" />
        </div>
      </div>

      <div className="collaboration-section">
        <h2>Our Collaborators</h2>
        <div className="collaboration-container">
          <div className="collaboration-item">
            <img src={collabPhoto1} alt="Collaborator 1" className="collaboration-photo" />
            <div className="boomerang-arrow">&#x27A4;</div>
          </div>
          <div className="collaboration-scrollable">
            <div className="collaboration-item">
              <img src={collabPhoto2} alt="Collaborator 2" className="collaboration-photo" />
            </div>
            <div className="collaboration-item">
              <img src={collabPhoto3} alt="Collaborator 3" className="collaboration-photo" />
            </div>
            {/* Add more collaboration items as needed */}
          </div>
        </div>
      </div>

      <div className="advice-section">
        <h2>EXPERT ADVICE FOR EVERY STEP OF YOUR JOURNEY</h2>
        <div className="advice-container">
          <div className="advice-item">
            <Link to="/admission">
              <img src={admissionPhoto} alt="Admission" className="advice-photo" />
            </Link>
            <div className="advice-text">
              <h3>College Admissions</h3>
              <p>Step-by-step expert guidance for every step of the college admissions process.</p>
            </div>
          </div>
          <div className="advice-item">
            <Link to="/financial-aid">
              <img src={financialAidPhoto} alt="Financial Aid" className="advice-photo" />
            </Link>
            <div className="advice-text">
              <h3>Financial Aid</h3>
              <p>Tools, advice, and resources to pay for college.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates on scholarships, college admissions, and financial aid directly to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>What do we do?</h3>
          <p>
            We are an online platform connecting students to vetted scholarship opportunities through data-based matching. Our comprehensive database includes scholarships from leading non-profits, companies, etc.
          </p>
        </div>
        <hr />
        <div className="faq-item">
          <h3>How will Inter Cultural Connections Group help you?</h3>
          <p>
            Inter Cultural Connections Group helps students save time and money in the process of paying for college by matching you to relevant scholarships that are currently accepting applications.
          </p>
        </div>
        <hr />
        <div className="faq-item">
          <h3>Is Inter Cultural Connections Group really free?</h3>
          <p>
            Inter Cultural Connections Group is 100% free for students.
          </p>
        </div>
        <hr />
        <div className="faq-item">
          <h3>Is Inter Cultural Connections Group open to international students?</h3>
          <p>
            The Inter Cultural Connections Group app matches students in India and many other countries to relevant scholarship opportunities. We also offer some resources for international students, including a <a href="#">guide to studying in the USA</a> and a <a href="#">list of vetted scholarships</a>.
          </p>
        </div>
      </div>

      <FloatingIcons /> {/* Include the FloatingIcons component */}
    </div>
  );
};

export default Advice;
