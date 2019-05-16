import React from 'react';
import './ReportsNav.css';

const ReportsNav = () => (
  <div className="card__row">
    <div className="rep-nav">
      <span className="rep-nav__item pointer active">
        <span>Transactions</span>
      </span>
      <span className="rep-nav__item pointer">
        <span>Blocks</span>
      </span>
      <span className="rep-nav__item pointer">
        <span>Staked</span>
      </span>
    </div>
    <span className="card__text--blue pointer">View all</span>
  </div>
);

export default ReportsNav;
