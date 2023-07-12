'use client';

import isLoggedIn from '@/utils/auth/isLoggedIn';
import { Profile, ShoppingCart } from 'iconsax-react';
import Link from 'next/link';

function HeaderProfile() {
  const loggedIn: boolean | null = isLoggedIn();
  return (
    <>
      <Link
        href={loggedIn ? '/profile' : '/auth/login'}
        className="grid w-12 h-12 transition-all duration-150 rounded-full hover:bg-gray-200 place-content-center">
        <Profile />
      </Link>
      <Link
        href={loggedIn ? '/cart' : '/auth/login'}
        className="grid w-12 h-12 transition-all duration-150 rounded-full hover:bg-gray-200 place-content-center">
        <ShoppingCart />
      </Link>
    </>
  );
}

export default HeaderProfile;
