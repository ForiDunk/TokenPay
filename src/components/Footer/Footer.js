import React from 'react';
import './Footer.css';
import { ReactComponent as Facebook } from './icons/facebook.svg';
import { ReactComponent as Linkedin } from './icons/linkedin.svg';
import { ReactComponent as Github } from './icons/github.svg';
import { ReactComponent as Plane } from './icons/plane.svg';
import { ReactComponent as Twitter } from './icons/twitter.svg';
import { ReactComponent as Youtube } from './icons/youtube.svg';

const Footer = () => (
  <div className="footer">
    <div className="logos">
      <Facebook className="pointer" />
      <Github className="pointer" />
      <Plane className="pointer" />
      <Twitter className="pointer" />
      <Youtube className="pointer" />
      <Linkedin className="pointer" />
    </div>
    <div className="copyright">
      © Copyright 2018 TokenPay. All rights reserved.
    </div>
  </div>
);

export default Footer;
