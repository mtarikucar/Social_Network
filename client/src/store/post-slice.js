import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "post",
  initialState: {
    Posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPostSuccess: (state, action) => {
      state.isFetching = false;
      state.Posts = action.payload;
    },
    getPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deletePostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deletePostSuccess: (state, action) => {
      state.isFetching = false;
      state.Posts.splice(
        state.Posts.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deletePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updatePostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatePostSuccess: (state, action) => {
      state.isFetching = false;
      state.Posts[
        state.Posts.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.Post;
    },
    updatePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //Post
    addPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addPostSuccess: (state, action) => {
      state.isFetching = false;
    },
    addPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getPostStart,
  getPostSuccess,
  getPostFailure,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
  updatePostStart,
  updatePostSuccess,
  updatePostFailure,
  addPostStart,
  addPostSuccess,
  addPostFailure,
} = PostSlice.actions;

export default PostSlice.reducer;