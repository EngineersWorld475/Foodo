import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className="px-4 py-5">
      <div className="flex items-center justify-between w-full">
        
        {/* search bar */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link to="/" className="font-semibold text-xl whitespace-nowrap">
            Foodoo
          </Link>


          {/* Search Bar (Visible on Medium Screens and Larger) */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-7 py-1 focus:outline-none focus:ring focus:ring-blue-300 ml-20"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className="hidden md:block text-gray-600 hover:text-gray-800 cursor-pointer">
            <FontAwesomeIcon icon={faArrowUp} size="sm" />
            <FontAwesomeIcon icon={faArrowDown} size="sm" />
          </div>

          {/* Button */}
          <Link to="/premium" className="hidden md:block">
            <button className="bg-tomato text-white px-4 py-2 rounded-lg hover:bg-tomato shadow-custom">
              Go to Premium
            </button>
          </Link>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Icon */}
          <div className="text-gray-600 hover:text-gray-800 cursor-pointer">
          <FontAwesomeIcon icon={faArrowUp} size="sm" />
          <FontAwesomeIcon icon={faArrowDown} size="sm" />
          </div>

          {/* Button */}
          <Link to="/premium">
            <button className="bg-tomato text-white px-4 py-2 rounded-lg hover:bg-tomato w-full">
              Go to Premium
            </button>
          </Link>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
