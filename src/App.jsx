import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import ProductPage from "./components/ProductPage";
import ContactPage from "./components/ContactPage";
import SingleProductPage from "./components/SingleProductPage";
import { UserContextProvider } from "./UserContext";
import Main from "./components/Main";
function App() {
  return <Main />;
}

export default App;
