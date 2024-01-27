import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
type LocationsProps = {};

const Locations: React.FC<LocationsProps> = () => {
  return (
    <section className='section__locations'>
      <div className='location'>
        <div className='icon__container icon__container--large'>
          <Image
            src='/assets/shared/desktop/illustration-canada.svg'
            role='presentation'
            alt=''
            height={202}
            width={202}
          />
        </div>
        <h2>Canada</h2>
        <Link href='/locations#canada' className='btn btn__dark'>
          See location
        </Link>
      </div>

      <div className='location'>
        <div className='icon__container icon__container--large'>
          <Image
            src='/assets/shared/desktop/illustration-australia.svg'
            role='presentation'
            alt=''
            height={202}
            width={202}
          />
        </div>
        <h2>Australia</h2>
        <Link href='/locations#australia' className='btn btn__dark'>
          See location
        </Link>
      </div>

      <div className='location'>
        <div className='icon__container icon__container--large'>
          <Image
            src='/assets/shared/desktop/illustration-united-kingdom.svg'
            role='presentation'
            alt=''
            height={202}
            width={202}
          />
        </div>
        <h2>United Kingdom</h2>
        <Link href='/locations#uk' className='btn btn__dark'>
          See location
        </Link>
      </div>
    </section>
  );
};
export default Locations;
