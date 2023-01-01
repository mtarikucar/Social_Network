import React from "react";
import { useEffect } from "react";

import Post from "./Post";
import LoadSpin from "./LoadSpin";

import { getPosts } from "../store/post-actions";
import { useDispatch, useSelector } from "react-redux";

function Posts(props) {
  const { Posts, isFetching, error } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(props));
  }, [props]);

  return (
    <div className="flex w-full">
      <div className="container mx-auto ">
        <div className="snap-y snap-mandatory h-screen overflow-hidden hover:overflow-scroll grid grid-cols-1 gap-6 mb-6 scrollbar-hide">
          {isFetching && <LoadSpin />}
          {Posts.map((post, key) => (
            <div key={key} className="snap-start ">
              <Post key={post.id} post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
