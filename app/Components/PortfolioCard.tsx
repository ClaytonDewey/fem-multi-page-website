import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PortfolioData } from '../Types';

const PortfolioCard = ({ image, title, text }: PortfolioData) => {
  return (
    <div className='card__portfolio'>
      <div className='card__header'>
        <Image src={image} alt={title} />
      </div>
      <Link href='/' className='card__body'>
        <h2>{title}</h2>
        <p>{text}</p>
      </Link>
    </div>
  );
};
export default PortfolioCard;
