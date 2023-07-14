'use client';

import Link from 'next/link';
import { LogoutCurve, ShoppingCart } from 'iconsax-react';
import useProfile from './useProfile';

function Profile() {
  const {
    editable,
    editableHandler,
    inputName,
    inputPhone,
    inputAddress,
    changeNameHandler,
    changePhoneHandler,
    changeAddressHandler,
    submitHandler,
    logoutHandler
  } = useProfile();
  return (
    <main className="flex items-center justify-center m-1 sm:m-0">
      <div className="grid w-full max-w-xl grid-cols-4 gap-4 sm:grid-cols-5 place-content-center">
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full col-span-4 gap-6 p-6 bg-white rounded-md shadow-md">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              نام
            </label>
            <input
              readOnly={!editable}
              value={inputName}
              onChange={changeNameHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none read-only:bg-gray-200 focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="tel">
              شماره تلفن
            </label>
            <input
              readOnly={!editable}
              value={inputPhone}
              onChange={changePhoneHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none read-only:bg-gray-200 focus:border-indigo-500"
              type="tel"
              id="tel"
              name="tel"
              placeholder="09123456789"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
              آدرس
            </label>
            <input
              readOnly={!editable}
              value={inputAddress}
              onChange={changeAddressHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none read-only:bg-gray-200 focus:border-indigo-500"
              type="text"
              id="address"
              name="address"
              placeholder="تهران ..."
            />
          </div>
          <div className="flex">
            {editable && (
              <button
                className="px-4 py-2 text-sm font-bold text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600"
                type="submit">
                ثبت
              </button>
            )}
            <button
              onClick={editableHandler}
              type="button"
              className="px-4 py-2 mr-auto text-sm font-bold text-white transition duration-300 bg-red-500 rounded-md justify-self-end hover:bg-red-600">
              {editable ? 'بستن' : 'ویرایش'}
            </button>
          </div>
        </form>
        <div className="flex col-span-4 gap-2 sm:row-start-1 sm:col-start-5 sm:flex-col">
          <Link
            href="/cart"
            className="flex flex-col items-center justify-center w-1/2 gap-2 p-3 bg-white rounded-md shadow-md sm:w-full sm:h-1/3">
            <ShoppingCart />
            سبد خرید
          </Link>
          <a
            href="#"
            onClick={logoutHandler}
            className="flex flex-col items-center justify-center w-1/2 gap-2 p-3 bg-white rounded-md shadow-md sm:w-full sm:h-1/3">
            <LogoutCurve />
            خروج
          </a>
        </div>
      </div>
    </main>
  );
}

export default Profile;
