import React from 'react';
import './NavItem.css';

const NavItem = ({ Icon, title, isActive }) => (
  <div className={isActive ? 'nav-item active pointer' : 'nav-item pointer'}>
    <Icon />
    <p>{title}</p>
  </div>
);

export default NavItem;
