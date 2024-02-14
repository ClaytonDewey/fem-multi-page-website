import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import expressImg from '../../public/assets/web-design/desktop/image-express.jpg';

type PortfolioCardProps = {};

const PortfolioCard: React.FC<PortfolioCardProps> = () => {
  return (
    <div className='card__portfolio'>
      <div className='card__header'>
        <Image src={expressImg} height={640} width={700} alt='Express' />
      </div>
      <Link href='/' className='card__body'>
        <h2>Express</h2>
        <p>A multi-carrier shipping website for ecommerce businesses</p>
      </Link>
    </div>
  );
};
export default PortfolioCard;
