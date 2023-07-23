import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Home2 from "./components/home/home2";
import Product from "./components/product/product";
import About from "./components/about_us/about";
import Process from "./components/process/process";
import { Copyright } from "./components/footer/footer";

function HomePage() {
  return (
    <React.Fragment>
      <Home />
      <Home2 />
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
