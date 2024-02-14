import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  image: StaticImageData;
  title: string;
  text: string;
}

const PortfolioCard = ({ image, title, text }: Props) => {
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
