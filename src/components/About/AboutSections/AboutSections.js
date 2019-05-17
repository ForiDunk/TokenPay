import React from 'react';
import { isBrowser } from 'react-device-detect';
import ASectionMobile from './mobile/ASectionMobile';

const AboutSections = () =>
  isBrowser ? <div>browsr ver</div> : <ASectionMobile />;

export default AboutSections;
