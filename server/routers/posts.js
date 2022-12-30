const express = require("express");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
const { addPost, getPostsStats, getPosts, getPost, deletePost, updatePost } = require('../controllers/post');

const router = express.Router();


// POST => /api/posts
router.post('/', addPost);

// PATCH => /api/posts/:id
router.patch('/:id', verifyTokenAndAuthorization, updatePost);

// DELETE => /api/posts/:id
router.delete('/:id', verifyTokenAndAuthorization, deletePost);

// GET => /api/posts/:id
router.get('/:id', getPost);

// GET => /api/posts
router.get('/', getPosts);

module.exports = router