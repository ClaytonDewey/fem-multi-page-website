import Image from 'next/image';
import React from 'react';
import { Locations } from '../Components';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className='about container'>
      <section className='hero hero__dark section__hero'>
        <div className='hero__header'>
          <Image
            src='/assets/about/mobile/image-about-hero.jpg'
            alt=''
            width={480}
            height={320}
          />
        </div>
        <div className='section__content'>
          <h2>About us</h2>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&rsquo;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We&rsquo;re always looking forward to creating brands,
            products, and digital experiences that connect with our
            clients&apos; audiences.
          </p>
        </div>
      </section>

      <section className='section__talent'>
        <div className='section__talent--header'>
          <Image
            src='/assets/about/mobile/image-world-class-talent.jpg'
            alt=''
            width={480}
            height={320}
          />
        </div>

        <div className='section__content'>
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>

          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form &mdash; content and meaning are just as important. We give
            great importance to craftsmanship, service, and prompt delivery.
            Clients have always been impressed with our high-quality outcomes
            that encapsulates their brand&rsquo;s story and mission.
          </p>
        </div>
      </section>

      <Locations />

      <section className='section__talent'>
        <div className='section__talent--header'>
          <Image
            src='/assets/about/mobile/image-real-deal.jpg'
            alt=''
            width={480}
            height={320}
          />
        </div>
        <div className='section__content'>
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients&rsquo; businesses, we are ready
            to take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>

          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </section>
    </main>
  );
};
export default page;
