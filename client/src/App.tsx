import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "../src/pages/Main";
import Post from "../src/pages/Post";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
