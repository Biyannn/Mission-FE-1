import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-3 px-4 bg-white flex justify-between items-center border-b-2 border-solid border-gray-300">
      <img src="/images/logo.png" alt="logo" />
      <div className="text-base font-medium flex space-x-4">
        <Link to="/login" className="">
          LOGIN
        </Link>
        <Link to="/" className="">
          REGISTER
        </Link>
        <Link to="/homepage" className="">
          BERANDA
        </Link>
      </div>
    </header>
  );
};

export default Header;
