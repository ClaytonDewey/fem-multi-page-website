import React from 'react';
import { Portfolio } from '../Components';
import Data from '../web-design/data';

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
      <Portfolio Data={Data} />
    </main>
  );
};
export default page;
