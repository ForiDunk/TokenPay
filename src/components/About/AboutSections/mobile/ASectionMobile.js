import React, { Component } from 'react';
import './ASectionMobile.css';

import Divider from '../../../ui/Divider/Divider';

class ASectionMobile extends Component {
  constructor() {
    super();

    this.state = {
      selected: 0,
    };
  }

  select = selected => {
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;
    return (
      <div className="a-section--mobile">
        <div className="dropdown" onClick={() => this.select(0)}>
          <div className="dropdown__header">
            <div className="dropdown__title">Services</div>
            <div className={`arrow ${selected === 0 ? 'open' : ''}`} />
          </div>
          <div className={`dropdown__body ${selected === 0 ? 'open' : ''}`}>
            <div className="dropdown__item">Wallet</div>
            <div className="dropdown__item">Roadmap</div>
            <div className="dropdown__item">News</div>
          </div>
        </div>
        <Divider />
        <div className="dropdown" onClick={() => this.select(1)}>
          <div className="dropdown__header">
            <div className="dropdown__title">Company</div>
            <div className={`arrow ${selected === 1 ? 'open' : ''}`} />
          </div>
          <div className={`dropdown__body ${selected === 1 ? 'open' : ''}`}>
            <div className="dropdown__item">About Us</div>
            <div className="dropdown__item">Our Team</div>
            <div className="dropdown__item">Contact Us</div>
          </div>
        </div>
        <Divider />
        <div className="dropdown" onClick={() => this.select(2)}>
          <div className="dropdown__header">
            <div className="dropdown__title">Resources</div>
            <div className={`arrow ${selected === 2 ? 'open' : ''}`} />
          </div>
          <div className={`dropdown__body ${selected === 2 ? 'open' : ''}`}>
            <div className="dropdown__item">Terms & Conditions</div>
            <div className="dropdown__item">Privacy Policy</div>
            <div className="dropdown__item">Whitepaper</div>
          </div>
        </div>
        <Divider />
        <div className="dropdown" onClick={() => this.select(3)}>
          <div className="dropdown__header">
            <div className="dropdown__title">Quick Links</div>
            <div className={`arrow ${selected === 3 ? 'open' : ''}`} />
          </div>
          <div className={`dropdown__body ${selected === 3 ? 'open' : ''}`}>
            <div className="dropdown__item">Register</div>
            <div className="dropdown__item">Forgot Password</div>
            <div className="dropdown__item">Newsletter</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ASectionMobile;
