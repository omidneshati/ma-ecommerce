import { Profile, ShoppingCart } from 'iconsax-react';
import Link from 'next/link';
import Searchbar from './Searchbar/Searchbar';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 justify-center hidden pt-2 bg-white shadow-md sm:flex">
      <div className="flex flex-col justify-center w-full max-w-screen-xl ">
        <div className="flex justify-around pb-2 border-b border-gray-400">
          <Logo />
          <Searchbar />
          <div className="flex justify-center w-1/5 gap-2 p-2">
            <Link
              href="/profile"
              className="grid w-12 h-12 transition-all duration-150 rounded-full hover:bg-gray-200 place-content-center">
              <Profile />
            </Link>
            <Link
              href="/cart"
              className="grid w-12 h-12 transition-all duration-150 rounded-full hover:bg-gray-200 place-content-center">
              <ShoppingCart />
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    </nav>
  );
}

export default Header;
