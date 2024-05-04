<<<<<<< HEAD
import React, { useState } from 'react';
import logoblack from '../assets/logoblack.png';
import { FaAlignJustify } from "react-icons/fa";
=======
import React from "react";
import logoblack from "../assets/logoblack.png";
import { Link } from "react-router-dom";
>>>>>>> 988d8b8f023c7deb46f6b82c3517b20688f008d4

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menu, setMenu] = useState(false);

  const handleActive = (id) => {
    setActiveTab(id);
  };

  return (
    <div className='w-full bg-white z-10'>
      {/* Flex container with Logo, three links and sign up button rubik font*/}
      <nav className="flex justify-between items-center px-4">
        <div className="Dronelogo">
          <img className="w-20" src={logoblack} alt="Logo" />
        </div>

<<<<<<< HEAD
        <div className="hidden lg:flex text-md space-x-6 items-center font-rubik">
          <button
            id="home"
            onClick={() => handleActive('home')}
            className={`hover:cursor-pointer hover:bg-teal-200 px-2 py-1 rounded-md ${
              activeTab === 'home' ? 'bg-teal-500 px-2 py-1 rounded-md text-white' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleActive('products')}
            className={`hover:cursor-pointer hover:bg-teal-200 px-2 py-1 rounded-md ${
              activeTab === 'products' ? 'bg-teal-500 px-2 py-1 rounded-md text-white' : ''
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleActive('contact')}
            className={`hover:cursor-pointer hover:bg-teal-200 px-2 py-1 rounded-md ${
              activeTab === 'contact' ? 'bg-teal-500 px-2 py-1 rounded-md text-white' : ''
            }`}
          >
            Contact
          </button>
        </div>

        <div className="hidden lg:block signup">
          <button className="font-rubik border-black border-2 rounded-md px-2 py-1 hover:bg-black hover:text-white">
            Sign Up
          </button>
        </div>

        <div className="lg:hidden menu-icon text-lg hover:cursor-pointer ">
          <button onClick={() => setMenu(!menu)}><FaAlignJustify /></button>
=======
        <div className="flex text-md space-x-6 items-center font-rubik">
          <a className="hover:cursor-pointer hover:text-gray-600">Home</a>
          <a className="hover:cursor-pointer hover:text-gray-600">Products</a>
          <a className="hover:cursor-pointer hover:text-gray-600">Contact</a>
        </div>

        <div className="signup">
          <Link to="/signup">
            {" "}
            <button className="font-rubik border-black border-2 rounded-md px-2 py-1 hover:bg-black hover:text-white">
              {" "}
              Sign Up
            </button>
          </Link>
>>>>>>> 988d8b8f023c7deb46f6b82c3517b20688f008d4
        </div>
      </nav>
      {/* menu transition */}
      <div className={`lg:hidden absolute z-10 bg-white w-full transition-height ease-in-out duration-500 ${menu ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col text-md items-center font-rubik">
          <button
            id="home"
            onClick={() => handleActive('home')}
            className={`hover:cursor-pointer hover:text-teal-500 ${
              activeTab === 'home' ? 'text-teal-500' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleActive('products')}
            className={`hover:cursor-pointer hover:text-teal-500 ${
              activeTab === 'products' ? 'text-teal-500' : ''
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleActive('contact')}
            className={`hover:cursor-pointer hover:text-teal-500 ${
              activeTab === 'contact' ? 'text-teal-500' : ''
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => handleActive('signup')}
            className={`hover:cursor-pointer hover:text-teal-500 ${
              activeTab === 'signup' ? 'text-teal-500' : ''
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
