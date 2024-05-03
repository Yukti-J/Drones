import React from "react";

import pilot from "../assets/drone.png";
import SignUp from "./SignUp";

function SignUpPage() {
  return (
    <header className="bg-gray-200 h-screen w-screen flex  ">
      <div className="ml-40 flex-1.5">
        <img
          className="h-full w-full  object-cover object-center"
          src={pilot}
          alt="nature image"
        />
      </div>
      <div className="h-screen  flex flex-1 justify-left items-center">
        <SignUp />
      </div>
    </header>
  );
}

export default SignUpPage;
