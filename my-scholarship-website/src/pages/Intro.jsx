import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Intro.css';
import Hnavbar from '../components/Hnavbar';
import Footer from '../components/Footer';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import collabPhoto1 from '../assets/collabPhoto1.jpg';
import collabPhoto2 from '../assets/collabPhoto2.jpg';
import collabPhoto3 from '../assets/collabPhoto3.jpg';
import admissionPhoto from '../assets/admissionPhoto.jpg';
import financialAidPhoto from '../assets/financialAidPhoto.jpg';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpeg';
import bg3 from '../assets/bg3.jpeg';
import FloatingIcons from './FloatingIcons';

const testimonials = [
  {
    photo: photo1,
    quote: "This platform helped me secure my dream scholarship!",
    name: "John Doe",
    university: "Harvard University"
  },
  {
    photo: photo2,
    quote: "Thanks to this site, I found the perfect scholarship for my studies.",
    name: "Jane Smith",
    university: "Stanford University"
  },
  {
    photo: photo3,
    quote: "I never thought applying for scholarships could be this easy.",
    name: "Michael Johnson",
    university: "MIT"
  }
];

const backgrounds = [bg1, bg2, bg3];

const Intro = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    const backgroundInterval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(backgroundInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/newsletter/subscribe', { email })
      .then(response => {
        setMessage(response.data.message);
        setEmail('');
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
      });
  };

  return (
    <div className="intro">
      <Hnavbar />
      <div className="hero-section" style={{ backgroundImage: `url(${backgrounds[currentBackgroundIndex]})`, marginTop: '60px' }}>
        <div className="hero-text">
          <h1>Welcome to Our Scholarship Platform</h1>
          <p>Find the best scholarships that fit your needs and goals.</p>
          <Link to="/admin">
            <button className="join-button">Join For Free</button>
          </Link>
        </div>
      </div>
      <div className="how-it-works-section">
        <h2>HOW ARE WE GOING TO HELP YOU?</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create your free profile</h3>
            <p>Let us get to know you with details around your background, interests, and goals!</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Get personalized, contacts with Counsellors</h3>
            <p>We'll instantly match you with scholarships you'll love and eligible so that you don't have to spend a lot of time searching yourself.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Applications with ease</h3>
            <p>Keep track of scholarship applications and apply to Exclusive scholarships entirely with your own pace and our guidance.</p>
          </div>
        </div>
      </div>

      <div className="collaboration-section">
        <h2>Our Collaborators</h2>
        <img src={collabPhoto1} alt="Collaborators" className="collaboration-photo" />
      </div>

      <div className="star-scholars-section">
        <h2>Meet Our Star Scholars</h2>
        <h3>First Edition Winners</h3>
        <div className="testimonial-container">
          {testimonials.length > 0 && (
            <div className="testimonial">
              <img 
                src={testimonials[currentTestimonialIndex].photo} 
                alt={`Photo of ${testimonials[currentTestimonialIndex].name}`} 
                className="testimonial-photo"
              />
              <blockquote>{testimonials[currentTestimonialIndex].quote}</blockquote>
              <p className="testimonial-name">{testimonials[currentTestimonialIndex].name}</p>
              <p className="testimonial-university">{testimonials[currentTestimonialIndex].university}</p>
            </div>
          )}
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
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      <FloatingIcons /> {/* Include the FloatingIcons component */}
      
    </div>
  );
};

export default Intro;
