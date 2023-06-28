'use client';

import { Category2, Diamonds, Home2, Icon } from 'iconsax-react';
import Link from 'next/link';
import useNavbar from './useNavbar';

const HEADER_PAGES_LINKS: { label: string; link: string; Icon: Icon }[] = [
  { label: 'خانه', link: '/', Icon: Home2 },
  { label: 'دسته بندی', link: '/category', Icon: Category2 },
  { label: 'باشگاه مشتریان', link: '/club', Icon: Diamonds }
];

function Navbar() {
  const { pathname } = useNavbar();
  return (
    <ul className="flex items-center gap-4 p-4">
      {HEADER_PAGES_LINKS.map((page) => (
        <Link
          href={page.link}
          key={page.label}
          className={`${
            pathname === page.link ? ' bg-gray-200' : 'bg-gray-50'
          } flex items-center justify-center gap-2 p-2 rounded-md min-w-[9rem] text-sm`}>
          <page.Icon />
          {page.label}
        </Link>
      ))}
    </ul>
  );
}

export default Navbar;
