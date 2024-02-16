import React from 'react';
import { Portfolio, Card } from '../Components';
import { GraphicData } from '../data';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className='container'>
      <section className='hero'>
        <div className='hero__body'>
          <h2>Graphic Design</h2>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>
      </section>
      <Portfolio CardData={GraphicData} />
      <section className='section section__design'>
        <Card type='web' title='Web Design' />
        <Card type='app' title='App Design' />
      </section>
    </main>
  );
};
export default page;
