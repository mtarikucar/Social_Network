const { models } = require("../database");

async function addPost(req, res) {
  const { profile_name, email, password } = req.body;

  try {
    
        
      
        res.status(201).json({
          status: "success",
          message: "User is registered successfully.",
          user,
        });
      
        res.status(500).json({
          status: "databse adding",
          message: JSON.stringify(error),
        });
      
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error at registered",
      message: JSON.stringify(err),
    });
  }
}

async function updatePost(req, res) {
  try {
    const updatedPost = await models.Post.findByPk(req.params.id);

    console.log(req.body);
    // updatedPost is the document after update because of new: true
    res.status(200).json({
      message: "Post is updated successfully!",
      updatedPost,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deletePost(req, res) {
  try {
    const gonnaDeletePost = await models.Post.findByPk(req.params.id);
    await gonnaDeletePost.destroy();
    res.status(200).json({
      message: "Post is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getPost(req, res) {
  try {
    const Post = await models.Post.findByPk(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Post",
      data: {
        Post: Post,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getPosts(req, res) {
  const query = req.query.new || false;
  try {
    const Posts = query
      ? await models.Post.find().sort({ _id: -1 }).limit(5) // -1 => descending order & 1 => ascending order
      : await models.Post.find();
    res.status(200).json(Posts);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getPostsStats(req, res) {
  const date = new Date();
  const lastYearDate = new Date(date.setFullYear(date.getFullYear() - 1)); // setFullYear returns a new timestamp.
  try {
    // TODO Make sure I understand it
    const data = await models.Post.aggregate([
      { $match: { createdAt: { $gte: lastYearDate } } },
      {
        $project: {
          month: { $month: "$createdAt" }, // Add a new field (month) with the $month of $createdAt
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = { addPost, getPostsStats, getPosts, getPost, deletePost, updatePost };
