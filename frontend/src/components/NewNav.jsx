import { useState } from "react";
import { Link } from "react-router-dom";

import companyLogo from "../assets/images/logo.png";
import loginLogo from "../assets/images/profileLogo.png";

const NewNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2 flex justify-center">
          <img className="w-16" src={companyLogo} alt="" />
          <div className="items-center flex ml-4">
            <Link
              // add link to login
              to="/home"
              className="hover:text-darkGrayishBlue items-center flex"
            >
              Home
            </Link>
          </div>
        </div>
        {/* <div className="pt-2">
          <img className="w-16" src={companyLogo} alt="" />
          <Link
          // add link to login
          to="/home" className="hover:text-darkGrayishBlue">
            Home
          </Link>
        </div> */}
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          {/* <Link to="#" className="hover:text-darkGrayishBlue ">
            About Us
          </Link> */}
          {/* <Link to="https://www.iiitdwd.ac.in/careers/" className="hover:text-darkGrayishBlue">
            Careers
          </Link> */}
        </div>
        {/* Button */}
        <Link
          to="/profile"
          className="flex hover:bg-gray-100 p-3 rounded-md hover:text-black"
        >
          <button className="btn btn-blue ">Profile</button>
          <img className="w-6 ml-2" src={loginLogo} alt="" />
        </Link>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger md:hidden focus:outline-none"
              : "block hamburger md:hidden focus:outline-none"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className={
            toggleMenu
              ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <Link to="#">Product</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Careers</Link>
        </div>
      </div>
    </nav>
  );
};

export default NewNav;
