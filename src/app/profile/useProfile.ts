'use client';

import isLoggedIn from '@/utils/auth/isLoggedIn';
import logout from '@/utils/auth/logout';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const useProfile = () => {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = isLoggedIn();
    if (!loggedIn) {
      router.replace('/auth/login');
    }
  }, [router]);

  const [editable, setEditable] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputAddress, setInputAddress] = useState<string>('');

  useEffect(() => {
    const userName = localStorage.getItem('name');
    const userPhone = localStorage.getItem('phone');
    const userAddress = localStorage.getItem('address');
    if (userName) setInputName(userName);
    if (userPhone) setInputPhone(userPhone);
    if (userAddress) setInputAddress(userAddress);
    return () => {};
  }, []);

  const editableHandler = () => {
    setEditable((v) => !v);
  };

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value);
  };
  const changePhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPhone(e.currentTarget.value);
  };
  const changeAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAddress(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputName) localStorage.setItem('name', inputName);
    if (inputPhone) localStorage.setItem('phone', inputPhone);
    if (inputAddress) localStorage.setItem('address', inputAddress);
    setEditable(false);
  };

  const logoutHandler = () => {
    logout();
    router.push('/auth/login');
  };

  return {
    editable,
    editableHandler,
    inputName,
    inputPhone,
    inputAddress,
    changeAddressHandler,
    changePhoneHandler,
    changeNameHandler,
    submitHandler,
    logoutHandler
  };
};

export default useProfile;
