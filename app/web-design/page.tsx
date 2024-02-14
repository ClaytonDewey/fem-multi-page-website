import React from 'react';
import { Portfolio, Card } from '../Components';
import { WebData } from '../data';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className='container'>
      <section className='hero'>
        <div className='hero__body'>
          <h2>Web Design</h2>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>
      </section>
      <Portfolio CardData={WebData} />
      <section className='section section__design'>
        <Card type='app' title='App Design' />
        <Card type='graphic' title='Graphic Design' />
      </section>
    </main>
  );
};
export default page;
