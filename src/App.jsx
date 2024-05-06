import { Route, Routes } from "react-router-dom";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Whyus from "./components/Whyus";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import ProductPage from "./components/ProductPage";
import ContactPage from "./components/ContactPage";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
