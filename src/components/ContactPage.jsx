import React, { useState } from "react";
import contact from "../assets/contact.png";
function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" mt-2 overflow-y-hidden">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold md:text-5xl text-center my-4 font-rubik">
          Contact Us
        </h1>
        <p className="p-1.5 md:p-0 md:w-4/6 font-rubik text-center text-xl md:text-2xl tracking-wide text-gray-600">
          Got questions or need assistance? Contact us for expert drone advice
          and support. Your aerial journey begins now!
        </p>
      </div>
      <div className="flex items-center justify-evenly  ">
        <img
          src={contact}
          alt=""
          className="hidden md:block md:w-1/3 p-0 md:p-5 "
        />
        <div className="relative h-auto flex w-full max-w-[24rem] flex-col ">
          <div class="relative block  overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
            <div
              role="tabpanel"
              class="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
              data-value="card"
            >
              <form class="flex flex-col p-2 md:p-0 gap-2 md:gap-4 mt-6 md:mt-12">
                <div>
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    Full Name
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      type="text"
                      placeholder="John Doe"
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
                <div class="my-4">
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    Email
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      placeholder="johndoe@gmail.com"
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
                <div class="mb-5">
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    Message
                  </p>
                  <div class="relative h-20 max-h-30 w-full min-w-[200px]">
                    <textarea
                      placeholder="Enter your consult (in brief)"
                      class="peer h-full max-h-max w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
                <button
                  class="bg-teal-500 text-xl rounded-md px-10 py-2 tracking-wide text-white  hover:bg-teal-200 hover:text-black"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <p class="flex  p-3 items-center justify-center gap-2 mt-2 font-sans text-sm antialiased font-medium leading-normal text-gray-700 opacity-60"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
