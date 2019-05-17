import React from 'react';
import './About.css';
import Card from '../ui/Card/Card';
import AboutSections from './AboutSections/AboutSections';

const About = () => (
  <Card>
    <div className="about">
      <div className="about__title">
        Get social with TokenPay. Be a part of our community.
      </div>
      <div className="about__subscribe">
        <input
          className="about__input"
          type="text"
          placeholder="Email address"
        />
        <button className="about__button">Subscribe</button>
      </div>
      <AboutSections />
    </div>
  </Card>
);

export default About;