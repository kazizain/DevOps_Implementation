import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Navb from "./Navb";
import Education from "./Education";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Navb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
