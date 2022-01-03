import React from 'react';

import { ReactComponent as Logo } from './../../assets/superbryteLogo.svg';

import './header.styles.scss';

export const Header = () => {
  return (
    <div className='header-container'>
      <Logo className='logo' />
      <h1>Super Team</h1>
    </div>
  );
};
