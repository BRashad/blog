import React from "react";
import Categories from "../components/Categories";
import Popular from "../components/Popular";
import Recent from "../components/Recent";

const Main = () => {
  return (
    <div className="main flex flex-row h-screen">
      <main className="basis-3/4 bg-red-500/5">
        <Recent />
      </main>
      <aside className="basis-1/4 bg-indigo-500/5">
        <Categories />
        <Popular />
      </aside>
    </div>
  );
};

export default Main;
