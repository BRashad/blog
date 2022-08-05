import React from "react";
import ReactImage from "../assets/react.jpg";

const Post = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="mt-24 mb-16 mb-5 text-2xl font-semibold text-left">
        First test blog post
      </h1>
      <img className="w-2/4 mb-10" src={ReactImage} alt="testimage" />
      <div className="w-2/4">
        <p>
          The classic latin passage that just never gets old, enjoy as much (or
          as little) lorem ipsum as you can handle with our easy to use filler
          text generator. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <br />
        <p>
          The classic latin passage that just never gets old, enjoy as much (or
          as little) lorem ipsum as you can handle with our easy to use filler
          text generator. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <br />
        <p>
          The classic latin passage that just never gets old, enjoy as much (or
          as little) lorem ipsum as you can handle with our easy to use filler
          text generator. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. The classic latin passage that just never gets old, enjoy as
          much (or as little) lorem ipsum as you can handle with our easy to use
          filler text generator. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. The classic latin passage that just never gets
          old, enjoy as much (or as little) lorem ipsum as you can handle with
          our easy to use filler text generator. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default Post;
