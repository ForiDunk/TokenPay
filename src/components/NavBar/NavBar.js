import React from 'react';
import NavBarDesktop from './desktop/NavBarDesktop';
import NavBarMobile from './mobile/NavBarMobile';
import './NavBar.css';
import { isBrowser } from 'react-device-detect';

const NavBar = () => (isBrowser ? <NavBarDesktop /> : <NavBarMobile />);

export default NavBar;
