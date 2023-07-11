'use client';

import Link from 'next/link';
import { Icon, Profile, Home2, Category2, ShoppingCart } from 'iconsax-react';
import useFooterMobileNavbar from './useFooterMobileNavbar';

const PAGES_LINK: { label: string; link: string; Icon: Icon }[] = [
  { label: 'خانه', link: '/', Icon: Home2 },
  { label: 'دسته بندی', link: '/category', Icon: Category2 },
  { label: 'سبد خرید', link: '/cart', Icon: ShoppingCart },
  { label: 'پروفایل', link: '/profile', Icon: Profile }
];

function FooterMobileNavbar() {
  const { pathname } = useFooterMobileNavbar();
  return (
    <div className="fixed inset-x-0 bottom-0 z-10 flex justify-around py-2 text-sm bg-white border-t border-gray-200 sm:hidden">
      {PAGES_LINK.map((page) => (
        <Link href={page.link} key={page.label} className="grid place-items-center">
          <page.Icon variant={pathname === page.link ? 'Bold' : 'Outline'} />
          {page.label}
        </Link>
      ))}
    </div>
  );
}

export default FooterMobileNavbar;
