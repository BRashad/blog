import React from "react";
import { NavBar } from "./components";
import Main from "./pages/Main";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col  container sm:container md:mx-auto">
      <header className="App-header basis-2/4">
        <NavBar />
      </header>
      <Header />
      <Main />
    </div>
  );
}

export default App;
