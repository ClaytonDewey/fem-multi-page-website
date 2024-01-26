import React from 'react';
import Image from 'next/image';
import { Navbar } from '.';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='header container'>
      <div className='header__logo'>
        <Image src='/assets/logo.png' alt='logo' width='24' height='24' />
        <h1 className='logo'>Designo</h1>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
