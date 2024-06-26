import React, { useContext, useEffect, useState } from "react";
import logoblack from "../assets/logoblack.png";
import { FaAlignJustify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Navbar = (props) => {
  // Context Initialization
  const { userInfo } = useContext(UserContext);

  const [activeTab, setActiveTab] = useState(props.route);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const handleActive = (id) => {
    setActiveTab(id);
    if (id == "home") {
      navigate("/");
    } else {
      navigate(`../${id}`);
    }
  };

  useEffect(() => {
    setActiveTab(props.route);
  });
  return (
    <div className="navbar w-full bg-white z-10">
      {/* Flex container with Logo, three links and sign up button rubik font*/}
      <nav className="flex justify-between items-center px-4">
        <div className="Dronelogo">
          <img
            onClick={() => handleActive("home")}
            className="w-20"
            src={logoblack}
            alt="Logo"
          />
        </div>

        <div className="hidden lg:flex text-md space-x-6 items-center font-rubik">
          <button
            id="home"
            onClick={() => handleActive("home")}
            className={`hover:cursor-pointer hover:bg-teal-200 px-2 py-1 rounded-md ${
              activeTab === "home"
                ? "bg-teal-500 px-2 py-1 rounded-md text-white"
                : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleActive("products")}
            className={`hover:cursor-pointer hover:bg-teal-200 px-2 py-1 rounded-md ${
              activeTab === "products"
                ? "bg-teal-500 px-2 py-1 rounded-md text-white"
                : ""
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleActive("contact")}
            className={`hover:cursor-pointer hover:bg-teal-200 px-2 py-1 rounded-md ${
              activeTab === "contact"
                ? "bg-teal-500 px-2 py-1 rounded-md text-white"
                : ""
            }`}
          >
            Contact
          </button>
        </div>

        <div className="hidden lg:block signup">
          {userInfo.name == undefined ? (
            <button
              onClick={() => handleActive("signup")}
              className="font-rubik border-black border-2 rounded-md px-2 py-1 hover:bg-black hover:text-white"
            >
              Sign Up
            </button>
          ) : (
            <button className="font-rubik border-black border-2 rounded-md px-2 py-1 ">
              Welcome: {userInfo.name}
            </button>
          )}
        </div>

        <div className="lg:hidden menu-icon text-lg hover:cursor-pointer ">
          <button onClick={() => setMenu(!menu)}>
            <FaAlignJustify />
          </button>
        </div>
      </nav>
      {/* menu transition */}
      <div
        className={`lg:hidden absolute z-10 bg-white w-full transition-height ease-in-out duration-500 ${
          menu ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col text-md items-center font-rubik">
          <button
            id="home"
            onClick={() => handleActive("home")}
            className={`hover:cursor-pointer hover:text-teal-500 ${
              activeTab === "home" ? "text-teal-500" : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleActive("products")}
            className={`hover:cursor-pointer hover:text-teal-500 ${
              activeTab === "products" ? "text-teal-500" : ""
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleActive("contact")}
            className={`hover:cursor-pointer hover:text-teal-500 ${
              activeTab === "contact" ? "text-teal-500" : ""
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => handleActive("signup")}
            className={`hover:cursor-pointer hover:text-teal-500 ${
              activeTab === "signup" ? "text-teal-500" : ""
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
