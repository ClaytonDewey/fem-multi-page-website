import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='home'>
      <section className='hero hero__dark'>
        <div className='hero__content'>
          <h2>Award-winning custom designs and digital branding solutions</h2>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div className='btn__container'>
            <Link href='/about' className='btn btn__light'>
              Learn more
            </Link>
          </div>
        </div>
        <Image
          alt='phone'
          src='/assets/home/desktop/image-hero-phone.png'
          height={1000}
          width={500}
        />
      </section>

      <section>
        <div>
          <h2>Web Design</h2>
          <p>View Projects</p>
        </div>

        <div>
          <h2>App Design</h2>
          <p>View Projects</p>
        </div>

        <div>
          <h2>Graphic Design</h2>
          <p>View Projects</p>
        </div>
      </section>

      <section>
        <h2>Passionate</h2>
        <p>
          {' '}
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>

        <h2>Resourceful</h2>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients&rsquo; needs.
        </p>

        <h2>Friendly</h2>
        <p>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </section>
    </main>
  );
}