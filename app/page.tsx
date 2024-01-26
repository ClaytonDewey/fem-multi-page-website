import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='home container'>
      <section className='hero hero__dark section__hero'>
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
          width={600}
        />
      </section>

      <section className='section__design'>
        <div className='section__design--web'>
          <h2>Web Design</h2>
          <Link href='/web-design'>View Projects</Link>
        </div>

        <div className='section__design--app'>
          <h2>App Design</h2>
          <Link href='/app-design'>View Projects</Link>
        </div>

        <div className='section__design--graphic'>
          <h2>Graphic Design</h2>
          <Link href='/graphic-design'>View Projects</Link>
        </div>
      </section>

      <section className='section__about'>
        <div>
          <div className='icon__container icon__container--large'>
            <Image
              src='/assets/home/desktop/illustration-passionate.svg'
              role='presentation'
              alt=''
              height={202}
              width={202}
            />
          </div>
          <h2>Passionate</h2>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div>
          <div className='icon__container icon__container--large'>
            <Image
              src='/assets/home/desktop/illustration-resourceful.svg'
              role='presentation'
              alt=''
              height={202}
              width={202}
            />
          </div>
          <h2>Resourceful</h2>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients&rsquo; needs.
          </p>
        </div>

        <div>
          <div className='icon__container icon__container--large'>
            <Image
              src='/assets/home/desktop/illustration-friendly.svg'
              role='presentation'
              alt=''
              height={202}
              width={202}
            />
          </div>
          <h2>Friendly</h2>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
    </main>
  );
}
