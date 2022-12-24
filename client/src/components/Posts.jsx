import React from "react";

import Post from "./Post";
function Posts() {
  return (
    <div className="flex w-full">
      <div className="container mx-auto mt-12">
        <div className="snap-y grid grid-cols-1 gap-6 mb-6">
          <div className="snap-start">
            <Post />
          </div>
          <div className="snap-start">
            <Post />
          </div><div className="snap-start">
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
