import React from 'react';
import { PortfolioCard } from '.';

type PortfolioProps = {};

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <section className='section section__portfolio'>
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </section>
  );
};
export default Portfolio;
