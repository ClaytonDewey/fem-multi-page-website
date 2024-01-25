import React from 'react';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <section>
        <h2>Contact us</h2>
        <p>
          Ready to take it to the next level? Let&rsquo;s talk about your
          project or idea and find out how we can help your business grow. If
          you are looking for unique digital experiences that&rsquo;s relatable
          to your users, drop us a line.
        </p>

        <form>
          <div>
            <label htmlFor='name' className='visually-hidden'>
              Name
            </label>
            <input type='text' name='name' id='name' placeholder='Name' />
          </div>
          <div>
            <label htmlFor='email' className='visually-hidden'>
              Email Address
            </label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Email Address'
            />
          </div>
          <div>
            <label htmlFor='phone' className='visually-hidden'>
              Phone
            </label>
            <input type='text' name='phone' id='phone' placeholder='Phone' />
          </div>
          Your message
          <div>
            <label htmlFor='message' className='visually-hidden'>
              Your Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Your Message'></textarea>
          </div>
          <button>Submit</button>
        </form>
      </section>

      <section>
        <h2>Canada</h2>
        <button>See location</button>
        Australia
        <button>See location</button>
        United Kingdom
        <button>See location</button>
      </section>
    </>
  );
};
export default page;
