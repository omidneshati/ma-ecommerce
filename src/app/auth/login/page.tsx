'use client';

import Link from 'next/link';
import useLogin from './useLogin';

export default function Login() {
  const {
    authError,
    changeNameHandler,
    changePasswordHandler,
    inputName,
    inputPassword,
    submitHandler
  } = useLogin();
  return (
    <main className="flex justify-center min-h-screen items-center">
      <form
        className="flex flex-col w-full max-w-sm gap-6 p-6 bg-white rounded-md shadow-md"
        onSubmit={submitHandler}>
        <p className="text-4xl font-bold">ورود</p>
        <div className="">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            نام
          </label>
          <input
            value={inputName}
            onChange={changeNameHandler}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder="امید نشاطی"
          />
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            رمز عبور
          </label>
          <input
            value={inputPassword}
            onChange={changePasswordHandler}
            required
            dir="ltr"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
        </div>
        {authError && (
          <div className="p-6 text-red-700">
            <p>حساب کاربری با این مشخصات یافت نشد</p>
          </div>
        )}
        <button
          className="w-full px-4 py-2 text-sm font-bold text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600"
          type="submit">
          ورود
        </button>
        <Link href="/auth/register" className="py-4 text-blue-600">
          ثبت نام
        </Link>
      </form>
    </main>
  );
}
