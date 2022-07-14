import React from "react";
import { NavBar } from "./components";
import Main from "./pages/Main";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Header />
      <Main />
    </div>
  );
}

export default App;
