import React from 'react';
import { ReactComponent as LogoShort } from './logo--short.svg';
import NavItems from '../NavItems/NavItems';
import NavInfo from '../NavInfo/NavInfo';

const NavBarDesktop = () => (
  <div className="navbar">
    <NavItems />
    <LogoShort
      className="pointer center"
      onClick={() => window.open('https://www.tokenpay.com/')}
    />
    <NavInfo />
  </div>
);

export default NavBarDesktop;
