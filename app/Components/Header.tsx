import React from 'react';
import Image from 'next/image';
import { Navigation } from '.';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className='logo'>
        <Image src='/assets/logo.png' alt='logo' width='24' height='24' />
        <h1>Designo</h1>
      </div>
      <Navigation />
    </header>
  );
};
export default Header;
