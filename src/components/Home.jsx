import React from "react";
import dronemain from "../assets/dronemain.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 m-auto md:justify-between md:h-screen  w-full">
        <section className="flex flex-col justify-center items-center m-auto w-full md:mt-0 sm:mt-10 mt-10 mb-5">
          <h1 className="font-rubik text-4xl md:text-5xl xl:text-6xl text-center leading-loose font-bold tracking-wider">
            Get Your Dream <br /> Drones
          </h1>
          <p className="font-rubik text-xl md:text-2xl mt-3 tracking-wide">
            Discover Your Perfect Flight
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-teal-500 md:text-xl rounded-md px-10 py-2 tracking-wide text-white m-8 hover:bg-teal-200 hover:text-black"
          >
            Get Started
          </button>
        </section>
        <section className="flex">
          <img
            className="m-auto w-1/2 sm:self-start md:self-center md:w-3/4"
            src={dronemain}
            alt="Drones"
          />
        </section>
      </div>
    </>
  );
};

export default Home;
