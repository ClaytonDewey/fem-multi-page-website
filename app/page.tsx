import Image from 'next/image';
import Link from 'next/link';
import heroBg from '../public/assets/home/desktop/bg-pattern-hero-home.svg';
import phoneImg from '../public/assets/home/desktop/image-hero-phone.png';
import passionateImg from '../public/assets/home/desktop/illustration-passionate.svg';
import resourcefulImg from '../public/assets/home/desktop/illustration-resourceful.svg';
import friendlyImg from '../public/assets/home/desktop/illustration-friendly.svg';
import { Card } from './Components';

const Home = () => {
  return (
    <main className='home'>
      <div className='bg-leaf'></div>
      <div className='bg-leaf'></div>
      <section className='hero hero--home'>
        <div className='hero__body'>
          <h2>Award-winning custom designs and digital branding solutions</h2>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link href='/about' className='btn btn__light'>
            Learn more
          </Link>
        </div>

        <Image
          alt='phone'
          src={phoneImg}
          role='presentation'
          className='hero__home--img'
        />
        <Image
          alt=''
          role='presentation'
          src={heroBg}
          className='hero__home--bg'
        />
      </section>

      <section className='section section__design'>
        <Card type='web' title='Web Design' />
        <Card type='app' title='App Design' />
        <Card type='graphic' title='Graphic Design' />
      </section>

      <section className='section section__about'>
        <div className='section__about--item'>
          <div className='icon__container icon__container--large'>
            <Image src={passionateImg} role='presentation' alt='' />
          </div>
          <div className='section__about--body'>
            <h2>Passionate</h2>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>

        <div className='section__about--item'>
          <div className='icon__container icon__container--large'>
            <Image src={resourcefulImg} role='presentation' alt='' />
          </div>
          <div className='section__about--body'>
            <h2>Resourceful</h2>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients&rsquo;
              needs.
            </p>
          </div>
        </div>

        <div className='section__about--item'>
          <div className='icon__container icon__container--large'>
            <Image src={friendlyImg} role='presentation' alt='' />
          </div>
          <div className='section__about--body'>
            <h2>Friendly</h2>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>
      {/* <img src='iceland-md.jpg' srcSet='iceland-sm.jpg 640w, icland-md.jpg 1280w, iceland-lg.jpg 1920' sizes='(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw' /> */}
    </main>
  );
};

export default Home;
