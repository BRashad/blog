import React from "react";
import { NavBar } from "./components";
import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="mx-auto">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
