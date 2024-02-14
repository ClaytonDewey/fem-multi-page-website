import React from 'react';
import { Portfolio } from '../Components';

const page = ({ params }: { params: { type: string } }) => {
  console.log(params);
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
      <Portfolio />
    </main>
  );
};
export default page;
