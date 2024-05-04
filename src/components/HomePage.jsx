import React from "react";
import Features from "./Features";
import Home from "./Home";
import Whyus from "./Whyus";
import Products from "./Products";
import Services from "./Services";
import Footer from "./Footer";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <Home />
      <Features />
      <Whyus />
      <Products />
      <Services />
      <Footer />
    </>
  );
}

export default HomePage;
