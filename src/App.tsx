import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      {/* <Home /> */}
    </div>
  );
}

export default App;
