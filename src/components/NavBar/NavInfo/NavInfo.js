import React from 'react';
import './NavInfo.css';
import { ReactComponent as Light } from './light.svg';

const NavInfo = () => (
  <div className="nav-info">
    <div className="nav-info__item">
      <div className="dot--green" />
      <p>
        <span>416005</span> blocks
      </p>
    </div>

    <div className="nav-info__item">
      <div className="dot--green" />
      <p>
        <span>29</span> connections
      </p>
    </div>

    <div className="t-dropdown pointer">
      TPAY <span className="arrow" />
    </div>
    <div className="theme-box">
      <Light />
    </div>
  </div>
);

export default NavInfo;
