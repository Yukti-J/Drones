import React from "react";

import pilot from "../assets/drone.png";
import SignIn from "./SignIn";

function SignInPage() {
  return (
    <header className="bg-gray-200 h-screen w-screen flex ">
      <div className="ml-40 flex-1.5">
        <img
          className="h-screen w-full  object-cover object-center"
          src={pilot}
          alt="nature image"
        />
      </div>
      <div className="h-screen  flex flex-1 justify-left items-center">
        <SignIn />
      </div>
    </header>
  );
}

export default SignInPage;
