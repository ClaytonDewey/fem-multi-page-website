import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../public/assets/shared/desktop/logo-light.png';
import ctaImg from '../../public/assets/shared/desktop/footer-circles.svg';
import { Navbar, SocialLinks } from '.';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='footer'>
      <div className='cta'>
        <Image
          src={ctaImg}
          alt=''
          height={584}
          width={876}
          className='cta__bg'
        />
        <div className='cta__body'>
          <h2>
            Let&rsquo;s talk about
            <br />
            your project
          </h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
          <Link href='/contact' className='btn btn__light'>
            Get in touch
          </Link>
        </div>
      </div>

      <div className='footer__nav'>
        <Link href='/' className='footer__nav--logo'>
          <Image src={logoImg} alt='logo' width='197' height='27' />
          <h2 className='visually-hidden'>DESIGNO</h2>
        </Link>
        <Navbar />
      </div>

      <div className='footer__content'>
        <address>
          <h2>Designo Central Office</h2>
          3886 Wellington Street
          <br />
          Toronto, Ontario M9C 3J5
        </address>

        <div className='footer__content--info'>
          <h2>Contact Us (Central Office)</h2>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
};
export default Footer;
