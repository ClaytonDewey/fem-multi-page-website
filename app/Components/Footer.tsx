import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../public/assets/shared/desktop/logo-light.png';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='footer'>
      <section className='cta__wrapper'>
        <div className='cta__contact'>
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
      </section>

      <div className='footer__body'>
        <div className='footer__about'>
          <div className='footer__logo'>
            <Image src={logoImg} alt='logo' width='197' height='27' />
          </div>

          <Link href='/about'>Our company</Link>
          <Link href='/locations'>Locations</Link>
          <Link href='/contact'>Contact</Link>
        </div>

        <address>
          <h2>Designo Central Office</h2>
          3886 Wellington Street
          <br />
          Toronto, Ontario M9C 3J5
        </address>

        <div className='footer__contact'>
          <h2>Contact Us (Central Office)</h2>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>

        <div className='footer__social'>
          <Link href='/'>
            <Image
              src='/assets/shared/desktop/icon-facebook.svg'
              alt='Facebook'
              height={24}
              width={24}
            />
          </Link>
          <Link href='/'>
            <Image
              src='/assets/shared/desktop/icon-youtube.svg'
              alt='YouTube'
              height={24}
              width={24}
            />
          </Link>
          <Link href='/'>
            <Image
              src='/assets/shared/desktop/icon-twitter.svg'
              alt='Twitter'
              height={24}
              width={24}
            />
          </Link>
          <Link href='/'>
            <Image
              src='/assets/shared/desktop/icon-pinterest.svg'
              alt='Pinterest'
              height={24}
              width={24}
            />
          </Link>
          <Link href='/'>
            <Image
              src='/assets/shared/desktop/icon-instagram.svg'
              alt='Instagram'
              height={24}
              width={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
