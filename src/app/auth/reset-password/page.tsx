'use client';

import Link from 'next/link';
import useResetPassword from './useResetPassword';

export default function ResetPassword() {
  const { changeNameHandler, changePasswordHandler, inputResetCode, inputPassword, submitHandler } =
    useResetPassword();
  return (
    <main className="flex justify-center min-h-screen items-center">
      <form
        className="flex flex-col w-full max-w-sm gap-6 p-6 bg-white rounded-md shadow-md"
        onSubmit={submitHandler}>
        <p className="text-4xl font-bold">بازسازی رمز عبور</p>
        <div className="">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            کد ارسالی
          </label>
          <input
            value={inputResetCode}
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
        <div className="">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirm-password">
            تکرار رمز عبور
          </label>
          <input
            required
            dir="ltr"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="********"
          />
        </div>
        <button
          className="w-full px-4 py-2 text-sm font-bold text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600"
          type="submit">
          ثبت نام
        </button>
        <Link href="/auth/login" className="py-4 text-blue-600">
          ورود
        </Link>
      </form>
    </main>
  );
}
