import React from 'react';
import { Portfolio, Card } from '../Components';
import { AppData } from '../data';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className='container'>
      <section className='hero'>
        <div className='hero__body'>
          <h1>App Design</h1>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </section>
      <Portfolio CardData={AppData} />
      <section className='section section__design'>
        <Card type='web' title='Web Design' />
        <Card type='graphic' title='Graphic Design' />
      </section>
    </main>
  );
};
export default page;
