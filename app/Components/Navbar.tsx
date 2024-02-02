import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/about'>Our Company</Link>
        </li>
        <li>
          <Link href='/locations'>Locations</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
