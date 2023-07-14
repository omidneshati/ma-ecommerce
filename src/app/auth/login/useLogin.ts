import login from '@/utils/auth/login';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

const useLogin = () => {
  const router = useRouter();
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [authError, setAuthError] = useState(false);

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value);
  };
  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.currentTarget.value);
  };

  const showError = () => {
    setAuthError(true);
    setTimeout(() => setAuthError(false), 5000);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = login({ name: inputName, password: inputPassword });
    if (result) {
      router.push('/profile');
      return undefined;
    }
    showError();
    return undefined;
  };

  return {
    inputName,
    inputPassword,
    authError,
    changeNameHandler,
    changePasswordHandler,
    submitHandler
  };
};

export default useLogin;
