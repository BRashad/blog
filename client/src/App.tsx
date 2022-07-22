import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "../src/pages/Main";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Posts from "../src/pages/Posts";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
