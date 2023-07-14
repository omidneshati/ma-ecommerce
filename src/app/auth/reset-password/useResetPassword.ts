import resetPassword from '@/utils/auth/resetPassword';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

const useResetPassword = () => {
  const router = useRouter();
  const [inputResetCode, setInputResetCode] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputResetCode(e.currentTarget.value);
  };
  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPassword({ code: inputResetCode, password: inputPassword });
    router.push('/auth/login');
    return undefined;
  };

  return {
    inputResetCode,
    inputPassword,
    changeNameHandler,
    changePasswordHandler,
    submitHandler
  };

  return {};
};

export default useResetPassword;
