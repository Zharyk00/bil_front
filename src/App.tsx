import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Meeting from "./Components/Meeting";
import Nav from "./Components/Nav";
import Contacts from "./Components/Contacts";
import About from "./Components/About";
import Specialists from "./Components/Specialists";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="components">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
