import React, { useState } from "react";

interface Post {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  picture: string;
  name: string;
  blog: string;
  categories: [string, string, string, string, string, string, string];
}

const Recent = () => {
  const posts: Post[] = [
    {
      _id: "62c5af84c931aabfbec544d3",
      index: 0,
      guid: "32f217e2-5fc3-4bcc-96cd-07315eb9e315",
      isActive: true,
      picture: "http://placehold.it/32x32",
      name: "Savage Mckinney",
      blog: "Sint excepteur fugiat irure eiusmod dolore ut minim voluptate. Cupidatat consequat mollit nisi do amet nisi excepteur eiusmod ullamco labore aute eu sit cillum. Commodo velit laborum eiusmod quis commodo dolor qui cupidatat nisi. Aliquip cillum culpa eiusmod aute consequat incididunt voluptate. Lorem labore id amet ea duis duis qui.\r\n",

      categories: ["do", "dolor", "elit", "minim", "irure", "id", "et"],
    },
    {
      _id: "62c5af84e1f984afa2ec4b7e",
      index: 1,
      guid: "f9e89f7f-ac23-4de7-91f3-59d644df38da",
      isActive: false,
      picture: "http://placehold.it/32x32",
      name: "Long Aguirre",
      blog: "Incididunt non mollit anim aliqua pariatur dolore magna fugiat elit amet. Voluptate deserunt eu elit cillum tempor reprehenderit dolor eiusmod nulla aute cupidatat velit sit ex. Consequat ad exercitation velit exercitation ad cupidatat in ea ex. Nostrud occaecat culpa sunt non proident eiusmod quis nulla sunt aute ad est sunt. Laboris pariatur eiusmod irure consectetur id officia dolor exercitation ex.\r\n",

      categories: ["et", "quis", "dolor", "labore", "aliquip", "magna", "aute"],
    },
    {
      _id: "62c5af846aeb73d2de4b106f",
      index: 2,
      guid: "a9658ab6-efa5-44ca-ad24-7a097f4c4acd",
      isActive: true,
      picture: "http://placehold.it/32x32",
      name: "Josephine Lopez",
      blog: "Eu ipsum occaecat et veniam non aliquip cupidatat tempor dolore eiusmod. Est cupidatat ipsum do officia id minim ipsum laboris ea. Culpa anim deserunt eiusmod sit pariatur veniam magna ad minim sint consectetur. Tempor non nisi proident occaecat non. Ullamco excepteur aliquip reprehenderit ea nulla in consectetur anim eu ex laborum sint pariatur. Quis eiusmod amet voluptate et laboris et commodo in anim.\r\n",

      categories: ["ad", "in", "dolore", "non", "excepteur", "amet", "id"],
    },
  ];
  return (
    <>
      <ul>
        {posts.map((post: Post) => (
          <div key={post._id}>
            <li>{post.name}</li>
            <p>{post.blog}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Recent;
