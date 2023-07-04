import { SearchNormal1 } from 'iconsax-react';

function Searchbar() {
  return (
    <div className="flex items-center w-3/5 gap-2 px-4 py-2 bg-gray-100 rounded-md">
      <SearchNormal1 className="text-gray-500" />
      <input className="w-full bg-transparent outline-none" placeholder="جستجو ..." />
    </div>
  );
}

export default Searchbar;
