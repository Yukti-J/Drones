import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import buy from "../assets/buy.png";
import products from "../products";
const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    products.filter((item) => {
      console.log("Product Id: " + item.id);
      console.log("ID: " + id);
      if (parseInt(item.id) === parseInt(id)) {
        console.log("hello");
        setProduct(item);
      }
    });
  }, []);

  const handleAddToCart = (e) => {};
  const handleWishlist = (e) => {};

  return (
    <div className="w-auto h-full bg-gray-200 overflow-hidden">
      <div className="p-6 md:p-12  grid grid-col-1 md:grid-cols-2 md:items-start md:justify-evenly my-5 md:mx-10 bg-white rounded-xl drop-shadow-2xl overflow-hidden ">
        <div className="flex-1 grid grid-cols-1 justify-between ">
          <h2 className="text-5xl my-1 font-rubik text-gray-800">
            {product.name}
          </h2>
          <p className="text-2xl my-1 font-bold font-rubik text-teal-700">
            {/* Rs. 20000 */}
            Rs. {product.price}
          </p>
          <p className="text-justify font-rubik my-4 text-gray-700 px-2 md:px-0">
            {product.description}
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            laudantium autem ex soluta voluptates iusto aliquam veniam expedita
            error id! */}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 md:justify-start">
            <button
              onClick={handleAddToCart}
              class="bg-teal-500 md:w-4/5 text-l rounded-md px-5 py-2 my-4 tracking-wide text-white  hover:bg-teal-200 hover:text-black"
            >
              Add to Cart
            </button>
            <button
              onClick={handleWishlist}
              class="border-r border-t border-b border-l border-teal-500 md:w-3/5 text-l rounded-md px-5 py-2 my-4 tracking-wide text-black  hover:bg-teal-200 hover:text-black"
            >
              Wishlist
            </button>
          </div>
        </div>
        <div className="flex-1   ">
          <img
            src={product.image}
            alt=""
            className="m-auto  md:w-4/5 rounded-4xl px-4"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
