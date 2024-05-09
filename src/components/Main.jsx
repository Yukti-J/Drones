import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../UserContext";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import Footer from "./Footer";
import SingleProductPage from "./SingleProductPage";
import ContactPage from "./ContactPage";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";

function Main() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          {/* Below are the routes with Navbar Component */}
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar route="home" />
                <HomePage />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Navbar route="products" />
                <ProductPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/products/:id"
            element={
              <>
                <Navbar route="products" />
                <SingleProductPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar route="contact" />
                <ContactPage />
              </>
            }
          />
          {/* Below are the routes without Navbar Component */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default Main;
