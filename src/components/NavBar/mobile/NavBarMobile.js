import React from 'react';
import { ReactComponent as LogoLong } from './logo--long.svg';
import { ReactComponent as Ham } from './ham.svg';

const NavBarMobile = () => (
  <div className="navbar">
    <LogoLong
      className="pointer"
      onClick={() => window.open('https://www.tokenpay.com/')}
    />
    <Ham className="pointer" />
  </div>
);

export default NavBarMobile;
