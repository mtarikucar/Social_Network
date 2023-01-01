const { models } = require("../database");

async function addPost(req, res) {
  const { content, image_path, video_path, voice_path, userId } = req.body;
  console.log(req.body);
  try {
    const post = await models.post.create({
      content: content,
      image_path: image_path,
      video_path: video_path,
      voice_path: voice_path,
      userId: userId,
    });

    res.status(201).json({
      status: "success",
      message: "post added successfully.",
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error at add",
      message: JSON.stringify(err),
    });
  }
}

async function updatePost(req, res) {
  try {
    const updatedPost = await models.post.findByPk(req.params.id);

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
    const gonnaDeletePost = await models.post.findByPk(req.params.id);
    await gonnaDeletePost.destroy();
    res.status(200).json({
      message: "Post is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getPost(req, res) {
  console.log(req.params);
  try {
    const Post = await models.post.findByPk(req.params.id);
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
  console.log(req.query);
  try {
    const { category, userId, limit } = req.query; // Destructuring the query parameters from the request
    let whereClause = {}; // Initializing an empty where clause object for the Sequelize query

    // If a category is provided in the query, add it to the where clause
    if (category) {
      whereClause.category = category;
    }

    // If a user ID is provided in the query, add it to the where clause
    if (userId) {
      whereClause.userId = userId;
    }

    // Execute the Sequelize findAll query, passing in the where clause and any desired limit
    const posts = await models.post.findAll({ where: whereClause, limit: limit });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message:"error at get products",
      data: error
    });
  }
}

async function getPostsStats(req, res) {
  const date = new Date();
  const lastYearDate = new Date(date.setFullYear(date.getFullYear() - 1)); // setFullYear returns a new timestamp.
  try {
    // TODO Make sure I understand it
    const data = await models.post.aggregate([
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

module.exports = {
  addPost,
  getPostsStats,
  getPosts,
  getPost,
  deletePost,
  updatePost,
};
