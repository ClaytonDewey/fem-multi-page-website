import React from 'react';
import Image from 'next/image';
import { Navbar } from '.';
import Link from 'next/link';
import logoImg from '../../public/assets/shared/desktop/logo-dark.png';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Link href='/'>
          <Image src={logoImg} alt='logo' width='197' height='27' />
          <h1 className='visually-hidden'>DESIGNO</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
