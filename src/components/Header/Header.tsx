import Searchbar from './Searchbar/Searchbar';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import HeaderProfile from '../HeaderProfile/HeaderProfile';

function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 justify-center hidden pt-2 bg-white shadow-md sm:flex">
      <div className="flex flex-col justify-center w-full max-w-screen-xl ">
        <div className="flex justify-around pb-2 border-b border-gray-400">
          <Logo />
          <Searchbar />
          <div className="flex justify-center w-1/5 gap-2 p-2">
            <HeaderProfile />
          </div>
        </div>
        <Navbar />
      </div>
    </nav>
  );
}

export default Header;
