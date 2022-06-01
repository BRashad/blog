import React from "react";
import PostCard from "../components/PostCard";
import Categries from "../components/Categries";

const Main = () => {
  return (
    <main className="main">
      <PostCard style={{ width: "70%" }} />
      <Categries style={{ width: "30%" }} />
    </main>
  );
};

export default Main;
