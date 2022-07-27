import React from "react";
import Categories from "../components/Categories";
import Popular from "../components/Popular";
import Recent from "../components/Recent";

const Main = () => {
  return (
    <div className="flex justify-center md:flex-wrap">
      <main className="basis-2/4 flex justify-center">
        <Recent />
      </main>
      <aside className="basis-1/4 flex flex-col">
        <Categories />
        <Popular />
      </aside>
    </div>
  );
};

export default Main;
