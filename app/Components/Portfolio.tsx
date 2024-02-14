import React from 'react';
import { PortfolioCard, Card } from '.';
import { PortfolioData } from '../Types';

type PortfolioProps = {
  CardData: PortfolioData[];
};

const Portfolio: React.FC<PortfolioProps> = ({ CardData }) => {
  return (
    <section className='section section__portfolio'>
      {CardData.map((data) => {
        return (
          <PortfolioCard
            key={data.title}
            image={data.image}
            title={data.title}
            text={data.text}
          />
        );
      })}
    </section>
  );
};
export default Portfolio;
