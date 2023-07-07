import React from "react";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import Footer, { Copyright } from "./components/footer/footer";
import Home from "./components/home/home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Contact /> */}
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
