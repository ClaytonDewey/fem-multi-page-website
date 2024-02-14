import React from 'react';
import { PortfolioCard } from '../Components';

const page = ({ params }: { params: { type: string } }) => {
  console.log(params);
  return (
    <main className='container'>
      <section className='hero'>
        <div className='hero__body'>
          <h1>App Design</h1>
        </div>
      </section>
      <PortfolioCard />
    </main>
  );
};
export default page;
