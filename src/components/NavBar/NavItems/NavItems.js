import React from 'react';
import NavItem from './NavItem/NavItem';
import { ReactComponent as Wallet } from './icons/wallet.svg';
import { ReactComponent as Compass } from './icons/compass.svg';
import { ReactComponent as Code } from './icons/code.svg';
import './NavItems.css';

const NavItems = () => (
  <div className="nav-items">
    <NavItem isActive={true} Icon={Compass} title={'Explorer'} />
    <NavItem isActive={false} Icon={Code} title={'API'} />
    <NavItem isActive={false} Icon={Wallet} title={'Wallets'} />
  </div>
);

export default NavItems;
