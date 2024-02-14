import React from 'react';
import { PortfolioCard, Card } from '.';
import { StaticImageData } from 'next/image';

interface Data {
  title: string;
  text: string;
  image: StaticImageData;
}

type PortfolioProps = {
  Data: Data[];
};

const Portfolio: React.FC<PortfolioProps> = ({ Data }) => {
  return (
    <>
      <section className='section section__portfolio'>
        {Data.map((data) => {
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
      <section className='section section__design'>
        <Card type='app' title='App Design' />
        <Card type='graphic' title='Graphic Design' />
      </section>
    </>
  );
};
export default Portfolio;
