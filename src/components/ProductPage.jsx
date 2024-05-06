import React from "react";
import Navbar from "./Navbar";
import products from "../products";

function ProductPage() {
  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold md:text-5xl text-center my-4 font-rubik">
        All Products
      </h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 w-full m-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="my-5 mx-10 bg-white rounded-xl drop-shadow-2xl hover:scale-105 "
          >
            <img
              src={product.image}
              alt={product.name}
              className="m-auto rounded-xl px-4"
            />
            <h2 className="text-center text-2xl my-1 font-rubik text-gray-800">
              {product.name}
            </h2>
            <p className="text-center text-xl my-1 font-bold font-rubik text-teal-700">
              Rs. {product.price}
            </p>
            <p className="text-center font-rubik mb-2 text-gray-700 px-2 md:px-5">
              {product.description}
            </p>
            <button className="w-full bg-teal-400 rounded-br-xl rounded-bl-xl py-2 text-white font-rubik text-xl">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
