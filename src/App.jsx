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
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
