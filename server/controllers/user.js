const { models } = require("../database");

async function updateUser(req, res) {
  const { name_surname,phone_number,image_path,gender,bio,website  } = req.body;
  try {
    const updatedUser = await user.findByPk(req.params.id);

    updateUser.save({
      name_surname:name_surname,
      phone_number:phone_number,
      image_path:image_path,
      gender:gender,
      bio:bio,
      website:website
    })
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
    const gonnaDeletedUser = await models.user.findByPk(req.params.id);
    await gonnaDeletedUser.save({
      isActive:  false,
      isDeleted: true
    })
    res.status(200).json({
      message: "User is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteUserPermanent(req, res) {
  try {
    const gonnaDeletedUser = await models.user.findByPk(req.params.id);
    await gonnaDeletedUser.destroy()
    res.status(200).json({
      message: "User is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}


async function getUser(req, res) {
  try {
    const user = await models.user.findByPk(req.params.id);
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

module.exports = {  getUsers, getUser, deleteUser, updateUser,deleteUserPermanent };
