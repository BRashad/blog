import * as React from "react";

interface Post {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  picture: string;
  name: string;
  blog: string;
  registered: Date;
  categories: [];
}

const Recent = () => {
  fetch("./blogs.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => {
      console.log("Error reading data " + err);
    });

  return (
    <>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default Recent;
