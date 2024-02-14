import React from 'react';
import { Portfolio } from '../Components';
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className='container'>
      <section className='hero'>
        <div className='hero__body'>
          <h1>App Design</h1>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </section>
      {/* <Portfolio /> */}
    </main>
  );
};
export default page;
