import React from "react";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import Footer, { Copyright } from "./components/footer/footer";
import Home from "./components/home/home";
import About from "./components/about_us/about";
import Process from "./components/process/process";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Process />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
