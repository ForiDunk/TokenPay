import React from 'react';
import './About.css';
import Card from '../ui/Card/Card';
import AboutSections from './AboutSections/AboutSections';
import { ReactComponent as TPayLogo } from './AboutSections/desktop/tpay-logo.svg';
import { isBrowser } from 'react-device-detect';

const About = () => (
  <div className="about">
    <Card>
      <div className="about__social">
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
      </div>
      <AboutSections />
      {isBrowser ? <TPayLogo /> : null}
    </Card>
  </div>
);

export default About;
