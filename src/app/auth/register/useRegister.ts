import register from '@/utils/auth/register';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

function useRegister() {
  const router = useRouter();
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value);
  };
  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({ name: inputName, password: inputPassword });
    router.push('/auth/login');
    return undefined;
  };

  return {
    inputName,
    inputPassword,
    changeNameHandler,
    changePasswordHandler,
    submitHandler
  };
}

export default useRegister;
