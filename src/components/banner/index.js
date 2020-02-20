import * as React from 'react';
import ylecLogo from '../../images/ylec.png';
import '../banner/banner.css';

export const Banner = () => (
  <div className="banner-container">
    <img className="ylec-logo" src={ylecLogo} />
  </div>
);
