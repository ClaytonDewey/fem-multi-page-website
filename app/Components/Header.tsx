import React from 'react';
import Image from 'next/image';
import { Navbar } from '.';
import Link from 'next/link';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='header container'>
      <div className='header__logo'>
        <Link href='/'>
          <Image
            src='/assets/shared/desktop/logo-dark.png'
            alt='logo'
            width='197'
            height='27'
          />
          <h1 className='visually-hidden'>DESIGNO</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
