'use client';

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
    submitHandler
  } = useProfile();
  return (
    <main>
      <div></div>
      <form
        onSubmit={submitHandler}
        className="w-full max-w-sm p-8 mx-auto bg-white rounded-md shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            نام
          </label>
          <input
            value={inputName}
            onChange={changeNameHandler}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="tel">
            شماره تلفن
          </label>
          <input
            value={inputPhone}
            onChange={changePhoneHandler}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="tel"
            id="tel"
            name="tel"
            placeholder="john@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
            آدرس
          </label>
          <input
            value={inputAddress}
            onChange={changeAddressHandler}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="address"
            name="address"
            placeholder="خیابان ..."
          />
        </div>
        <div>
          <button
            onClick={editableHandler}
            className="px-4 py-2 text-sm font-bold text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600"
            type="submit">
            {editable ? 'بستن' : 'ویرایش'}
          </button>
          {editable && (
            <button
              className="px-4 py-2 text-sm font-bold text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600"
              type="submit">
              ثبت
            </button>
          )}
        </div>
      </form>
    </main>
  );
}

export default Profile;
