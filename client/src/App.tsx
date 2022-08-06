import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Posts from "../src/pages/Posts";
import Post from "../src/pages/Post";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
