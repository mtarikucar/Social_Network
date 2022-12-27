const { models } = require("../database");

async function updateUser(req, res) {
  try {
    const updatedUser = await models.user.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    // updatedUser is the document after update because of new: true
    res.status(200).json({
      message: "User is updated successfully!",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteUser(req, res) {
  try {
    await models.user.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "User is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getUser(req, res) {
  try {
    const user = await models.user.findOne({
      where: {
        id: req.params.id
      },
    });
    res.status(200).json({
      status: "success",
      message: "user",
      data: {
        user: user
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getUsers(req, res) {
  const query = req.query.new || false;
  try {
    const users = query
      ? await models.user.find().sort({ _id: -1 }).limit(5) // -1 => descending order & 1 => ascending order
      : await models.user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getUsersStats(req, res) {
  const date = new Date();
  const lastYearDate = new Date(date.setFullYear(date.getFullYear() - 1)); // setFullYear returns a new timestamp.
  try {
    // TODO Make sure I understand it
    const data = await models.user.aggregate([
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

module.exports = { getUsersStats, getUsers, getUser, deleteUser, updateUser };
