import React, { useState, useEffect } from "react";
import Hnavbar from "../components/Hnavbar";
import Footer from "../components/Footer";
import "./Home.css";
import axios from 'axios';

const Home = () => {
  const [scholarships, setScholarships] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [sortCriteria, setSortCriteria] = useState("default");
  const [countryFilter, setCountryFilter] = useState("");

  useEffect(() => {
    fetchScholarships();
  }, [sortCriteria, countryFilter]);

  const fetchScholarships = async () => {
    try {
      const response = await axios.get('https://steelblue-rook-877612.hostingersite.com/api.php?action=getScholarships');
      setScholarships(sortAndFilterScholarships(response.data, sortCriteria, countryFilter));
    } catch (error) {
      console.error('Error fetching scholarships:', error);
    }
  };

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sortAndFilterScholarships = (scholarships, criteria, countryInitial) => {
    let filteredScholarships = scholarships;

    if (criteria === "country" && countryInitial) {
      filteredScholarships = scholarships.filter(scholarship =>
        scholarship.country.toLowerCase().startsWith(countryInitial.toLowerCase())
      );
    }

    return filteredScholarships.sort((a, b) => {
      if (criteria === "country") {
        return a.country.localeCompare(b.country);
      } else if (criteria === "deadline") {
        return new Date(a.deadline) - new Date(b.deadline);
      } else if (criteria === "default") {
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      }
      return 0;
    });
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handleCountryFilterChange = (letter) => {
    setCountryFilter(letter);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      <Hnavbar />
      <div className="home-content">
        <h1>Scholarship Opportunities</h1>
        
        <div className="sort-options">
          <select onChange={handleSortChange} value={sortCriteria}>
            <option value="default">Sort by Default</option>
            <option value="country">Sort by Country</option>
            <option value="deadline">Sort by Deadline</option>
          </select>
        </div>
        
        {sortCriteria === "country" && (
          <div className="alphabet-filter">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className={`alphabet-button ${countryFilter === letter ? "selected" : ""}`}
                onClick={() => handleCountryFilterChange(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        )}
        
        {scholarships.length === 0 ? (
          <p>No scholarships available.</p>
        ) : (
          <ul className="scholarship-list">
            {scholarships.map((scholarship, index) => (
              <li key={index} className="scholarship-item">
                <img src={scholarship.banner} alt="Banner" className="banner-img" />
                <div className="scholarship-details-container">
                  <div className="scholarship-details">
                    <h2 className="scholarship-title">{scholarship.title}</h2>
                    <div className="scholarship-info-container">
                      <div className="scholarship-info-item">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 17.75c-.27.03-.55.04-.88.04-4.32 0-7.92-3.32-8.43-7.57H8v.5c0 .83.67 1.5 1.5 1.5H10v1c0 .55.45 1 1 1s1-.45 1-1v-1h.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H9c-.28 0-.5-.22-.5-.5V8.5h2V9c0 .55.45 1 1 1s1-.45 1-1V8.5h2.11c.03.17.05.33.05.5 0 2.76-2.24 5-5 5h-.5v-.5c0-.28-.22-.5-.5-.5h-1V11h.5c.28 0 .5-.22.5-.5V10H9v-.5c0-.28-.22-.5-.5-.5H5.03C5.57 6.31 8.54 4 12 4c1.73 0 3.29.55 4.56 1.47L14.5 7.5H14c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.5v1.5c0 .55.45 1 1 1h.98c-1.1 1.51-2.85 2.5-4.6 2.75z"/>
                        </svg>
                        <p className="scholarship-info-text">{scholarship.country}</p>
                      </div>
                      <div className="scholarship-info-item">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                          <path d="M17 5H3C1.9 5 1 5.9 1 7v10c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H3V7h14v10zM8 9H6v2h2V9zm4 0h-2v2h2V9zm4 0h-2v2h2V9z"/>
                        </svg>
                        <p className="scholarship-info-text">{scholarship.rewardWorth}</p>
                      </div>
                      <div className="scholarship-info-item">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                          <path d="M19 3h-1V2h-2v1H8V2H6v1H5c-1.1 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11zm0-13H5V5h14v3zM7 12h5v5H7z"/>
                        </svg>
                        <p className="scholarship-info-text">{new Date(scholarship.deadline).toLocaleDateString()}</p>
                      </div>
                      <div className="scholarship-info-item">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 17.75c-.27.03-.55.04-.88.04-4.32 0-7.92-3.32-8.43-7.57H8v.5c0 .83.67 1.5 1.5 1.5H10v1c0 .55.45 1 1 1s1-.45 1-1v-1h.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H9c-.28 0-.5-.22-.5-.5V8.5h2V9c0 .55.45 1 1 1s1-.45 1-1V8.5h2.11c.03.17.05.33.05.5 0 2.76-2.24 5-5 5h-.5v-.5c0-.28-.22-.5-.5-.5h-1V11h.5c.28 0 .5-.22.5-.5V10H9v-.5c0-.28-.22-.5-.5-.5H5.03C5.57 6.31 8.54 4 12 4c1.73 0 3.29.55 4.56 1.47L14.5 7.5H14c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.5v1.5c0 .55.45 1 1 1h.98c-1.1 1.51-2.85 2.5-4.6 2.75z"/>
                        </svg>
                        <p className="scholarship-info-text">{scholarship.gradeLevel}</p>
                      </div>
                      <div className="apply-buttons">
                        {scholarship.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="apply-button"
                          >
                            Apply
                          </a>
                        ))}
                      </div>
                    </div>
                    <button className="button" onClick={() => toggleDescription(index)}>
                      {expanded[index] ? 'Close Description' : 'Read Description'}
                    </button>
                    {expanded[index] && (
                      <div className="scholarship-description">
                        {scholarship.description}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default Home;
