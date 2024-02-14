import React from 'react';
import { Portfolio } from '../Components';
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className='container'>
      <section className='hero'>
        <div className='hero__body'>
          <h1>Graphic Design</h1>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>
      </section>

      {/* <Portfolio /> */}
    </main>
  );
};
export default page;
