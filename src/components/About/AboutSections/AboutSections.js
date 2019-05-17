import React from 'react';
import { isBrowser } from 'react-device-detect';
import ASectionMobile from './mobile/ASectionMobile';
import ASectionDesktop from './desktop/ASectionDesktop';

const AboutSections = () =>
  isBrowser ? <ASectionDesktop /> : <ASectionMobile />;

export default AboutSections;
