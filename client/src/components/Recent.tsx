import React from "react";

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
    {
      _id: "62c5af84c8aadf9d7797849c",
      index: 3,
      guid: "ced18446-c48f-412b-8a1d-49c1c62c064f",
      isActive: true,
      picture: "http://placehold.it/32x32",
      name: "Socorro Wade",
      blog: "Minim veniam id irure sint aliqua. Exercitation deserunt velit sint dolore est incididunt. Culpa exercitation do mollit laboris esse incididunt exercitation. Excepteur Lorem dolore irure officia do eu excepteur non sit pariatur officia aliquip. Enim officia labore reprehenderit elit amet anim fugiat ex culpa culpa culpa sint sint nostrud.\r\n",
      categories: [
        "laboris",
        "occaecat",
        "dolor",
        "sit",
        "est",
        "cupidatat",
        "qui",
      ],
    },
    {
      _id: "62c5af84b54500f45aeef21c",
      index: 4,
      guid: "eff51fd9-2ee6-446e-b517-5c00d3c74736",
      isActive: false,
      picture: "http://placehold.it/32x32",
      name: "Georgette Henderson",
      blog: "Qui ullamco sint laborum qui est eiusmod. Nostrud consequat aliquip sit anim adipisicing qui anim cupidatat reprehenderit sint cillum esse. Irure aliquip non elit commodo quis consequat dolore ex proident eiusmod consectetur deserunt. Laboris magna ea non enim sint consequat laboris.\r\n",
      categories: [
        "velit",
        "tempor",
        "mollit",
        "reprehenderit",
        "Lorem",
        "do",
        "anim",
      ],
    },
  ];
  return (
    <div>
      <h2 className="p-6 text-left">RECENT POSTS</h2>
      {posts.map((post: Post) => (
        <div
          key={post._id}
          className="p-6 max-w-xl bg-white rounded-lg text-left"
        >
          <a href="post.html">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {post.name}
            </h5>
          </a>
          <p className="mb-3 font-normal ">{post.blog}</p>
          <a
            href="/posts/:id"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Recent;
