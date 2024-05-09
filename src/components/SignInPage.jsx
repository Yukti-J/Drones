import React from "react";

import pilot from "../assets/drone.png";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    preventDefault();
    navigate("/");
  };
  return (
    <header className="relative bg-gray-200 h-screen w-screen flex ">
      <button
        onClick={handleNavigate}
        className="absolute top-5 left-5 md:top-10 md:left-10 font-rubik border-black border-2 rounded-md px-2 py-1 hover:bg-black hover:text-white"
      >
        &larr; Back to Home
      </button>
      <div className="hidden md:block  ml-40 flex-1.5">
        <img
          className="h-screen w-full  object-cover object-center"
          src={pilot}
          alt="nature image"
        />
      </div>
      <div className="md:h-screen  flex md:flex-1 justify-left items-center">
        <SignIn />
      </div>
    </header>
  );
}

export default SignInPage;
