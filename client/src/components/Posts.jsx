import React from "react";
import { useState, useEffect } from "react";

import Post from "./Post";

import {publicRequest} from "../requestMethods"

function Posts({community}) {

/*   const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const url = community ? `/posts?community=${community}?limit=10?offset${posts.length}` : `/posts?limit=10?offset${posts.length}`; //For the Home Page
      const response = await publicRequest.get(url);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []); */

  return (
    <div className="flex w-full">
      <div className="container mx-auto ">
        <div className="snap-y snap-mandatory h-screen overflow-hidden hover:overflow-scroll grid grid-cols-1 gap-6 mb-6 scrollbar-hide">

          <div className="snap-start ">
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
