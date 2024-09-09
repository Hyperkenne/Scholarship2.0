import React from 'react';
import pdfFile from '../assets/kenn.pdf'; // Update the path to your actual PDF file
import './FinancialAid.css';

const FinancialAid = () => {
  return (
    <div>
      <h1>Financial Aid</h1>
      <p>This is the Financial Aid page.</p>
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
        <a href={pdfFile} download="kenn.pdf">
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default FinancialAid;
