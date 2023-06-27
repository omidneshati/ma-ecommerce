import { usePathname } from 'next/navigation';

const useNavbar = () => {
  const pathname = usePathname();

  return {
    pathname
  };
};

export default useNavbar;
