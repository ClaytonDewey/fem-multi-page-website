import type { Metadata } from 'next';
// import { Jost } from 'next/font/google';
import './scss/style.scss';
import { Footer, Header } from './Components';

// const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Mentor | Designo Agency Website Challenge',
  description:
    'A solution to the Frontentmentor Designo Multi Page Website challenge.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
