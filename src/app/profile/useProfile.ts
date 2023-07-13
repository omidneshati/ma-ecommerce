import isLoggedIn from '@/utils/auth/isLoggedIn';
import { useRouter } from 'next/navigation';

const useProfile = () => {
  const loggedIn = isLoggedIn();
  const router = useRouter();

  if (!loggedIn) {
    router.replace('auth/login');
  }

  const userName = localStorage.getItem('name');

  return { userName: userName ?? undefined };
};

export default useProfile;
