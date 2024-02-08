import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
  type: string;
  title: string;
};

const Card: React.FC<CardProps> = ({ type, title }) => {
  return (
    <Link href={`/${type}-design`} className={`card ${type}`}>
      <h2>{title}</h2>
      <p>
        View Projects
        <Image
          src='/assets/shared/desktop/icon-right-arrow.svg'
          alt='arrow'
          width={4}
          height={8}
        />
      </p>
    </Link>
  );
};
export default Card;
