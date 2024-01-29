import React from 'react';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className='container'>
      {' '}
      <section>
        <h2>Canada</h2>
        <h3>Designo Central Office</h3>
        <address>
          3886 Wellington Street
          <br />
          Toronto, Ontario M9C 3J5
        </address>

        <h3>Contact</h3>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
      </section>
      <section>
        <h2>Australia</h2>
        <h3>Designo AU Office</h3>
        <address>
          19 Balonne Street
          <br />
          New South Wales 2443
        </address>

        <h3>Contact</h3>
        <p>P : (02) 6720 9092</p>
        <p>M : contact@designo.au</p>
      </section>
      <section>
        <h2>United Kingdom</h2>
        <h3>Designo UK Office</h3>
        <address>
          13 Colorado Way
          <br />
          Rhyd-y-fro SA8 9GA
        </address>

        <h3>Contact</h3>
        <p>P : 078 3115 1400</p>
        <p>M : contact@designo.uk</p>
      </section>
    </main>
  );
};
export default page;
