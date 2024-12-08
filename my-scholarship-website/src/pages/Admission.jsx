import React, { useEffect } from 'react';
import pdfFile from '../assets/USER STORIES ON GITAM UNIVERSITY SOFTWARE DEVELOPMENT.pdf'; // Adjust the path to your actual PDF file
import './Admission.css';

const Admission = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  })

  return (
    <div>
      <h1>Admission</h1>
      <p>The following document will help you to know the minimum requirements needed fo the applications and admissions in the top abroad universities around the globe.</p>
      <div>
        <iframe 
          src={pdfFile} 
          width="100%" 
          height="600px" 
          style={{ border: 'none' }} 
          title="PDF Viewer">
        </iframe>
      </div>
      <div>
        <a href={pdfFile} download="USER STORIES ON GITAM UNIVERSITY SOFTWARE DEVELOPMENT.pdf">
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Admission;
