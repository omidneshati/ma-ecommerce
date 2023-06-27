import { usePathname } from 'next/navigation';

const useFooterMobileNavbar = () => {
  const pathname = usePathname();

  return { pathname };
};

export default useFooterMobileNavbar;
