import React from "react";
import "./App.scss";
import Banner from "./components/Banner";
import Meet from "./components/Meet";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Banner />
      <Meet />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
