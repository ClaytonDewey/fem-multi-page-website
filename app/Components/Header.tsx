import React from 'react';
import Image from 'next/image';
import { Navbar } from '.';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='header container'>
      <div className='header__logo'>
        <Image
          src='/assets/shared/desktop/logo-dark.png'
          alt='logo'
          width='197'
          height='27'
        />
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
