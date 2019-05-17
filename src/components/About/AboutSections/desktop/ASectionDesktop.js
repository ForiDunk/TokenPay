import React from 'react';
import './ASectionDesktop.css';

const ASectionDesktop = () => (
  <div className="grid-container">
    <div className="grid-item">
      <div className="grid-title">Services</div>
      <div className="grid-link">Wallets</div>
      <div className="grid-link">Roadmap</div>
      <div className="grid-link">News</div>
    </div>
    <div className="grid-item">
      <div className="grid-title">Company</div>
      <div className="grid-link">About Us</div>
      <div className="grid-link">Our Team</div>
      <div className="grid-link">Contact Us</div>
    </div>
    <div className="grid-item">
      <div className="grid-title">Resources</div>
      <div className="grid-link">Terms & Conditions</div>
      <div className="grid-link">Privacy Policy</div>
      <div className="grid-link">Whitepaper</div>
    </div>
    <div className="grid-item">
      <div className="grid-title">Quick Links</div>
      <div className="grid-link">Register</div>
      <div className="grid-link">Forgot Password</div>
      <div className="grid-link">Newsletter</div>
    </div>
  </div>
);

export default ASectionDesktop;
