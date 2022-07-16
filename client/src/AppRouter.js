import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Main";
import Post from "../src/pages/Post";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
