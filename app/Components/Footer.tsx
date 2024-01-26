import React from 'react';
import Image from 'next/image';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='footer container'>
      <section>
        <h2>Let&rsquo;s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button>Get in touch</button>
      </section>

      <div className='footer__logo'>
        <Image src='/assets/logo.png' alt='logo' width='24' height='24' />
        <h2 className='logo'>Designo</h2>
      </div>

      <p>Our company</p>
      <p>Locations</p>
      <p>Contact</p>

      <address>
        <h2>Designo Central Office</h2>
        3886 Wellington Street
        <br />
        Toronto, Ontario M9C 3J5
      </address>

      <h2>Contact Us (Central Office)</h2>
      <p>P : +1 253-863-8967</p>
      <p>M : contact@designo.co</p>
    </footer>
  );
};
export default Footer;
