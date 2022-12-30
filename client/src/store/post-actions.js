import { publicRequest } from "../requestMethods";
import {
  getPostFailure,
  getPostStart,
  getPostSuccess,
  deletePostFailure,
  deletePostStart,
  deletePostSuccess,
  updatePostFailure,
  updatePostStart,
  updatePostSuccess,
  addPostFailure,
  addPostStart,
  addPostSuccess,
} from "./post-slice";

export const getPosts = async (dispatch) => {
  dispatch(getPostStart());
  try {
    const res = await publicRequest.get("/posts");
    dispatch(getPostSuccess(res.data));
  } catch (err) {
    dispatch(getPostFailure());
  }
};

export const deletePost = async (id) => {
  dispatch(deletePostStart());
  try {
    // const res = await userRequest.delete(`/posts/${id}`);
    dispatch(deletePostSuccess(id));
  } catch (err) {
    dispatch(deletePostFailure());
  }
};

export const updatePost = async (id, Post) => {
  dispatch(updatePostStart());
  try {
    // update
    dispatch(updatePostSuccess({ id, Post }));
  } catch (err) {
    dispatch(updatePostFailure());
  }
};

export const addPost = (post) => {
  return async (dispatch) => {
    dispatch(addPostStart());
    try {
      const res = await publicRequest.post(`/posts`, post);
      dispatch(addPostSuccess(res.data));
    } catch (err) {
      dispatch(addPostFailure());
    }
  };
};
