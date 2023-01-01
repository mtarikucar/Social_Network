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

export const getPosts = (props) => {
  return async (dispatch) => {
    dispatch(getPostStart());
    try {
      let url = "/posts";

      url = props.category ? url + `?category=${props.category}` : url;
      url = props.userId ? url + `?userId=${props.userId}` : url;
      url = props.limit ? url + `?limit=${props.limit}` : url;
      const response = await publicRequest.get(url);

      dispatch(getPostSuccess(response.data));
    } catch (err) {
      dispatch(getPostFailure());
    }
  };
};

export const deletePost = async (id) => {
  dispatch(deletePostStart());
  try {
    // const res = await userRequest.findById(`/posts/${id}`);
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
