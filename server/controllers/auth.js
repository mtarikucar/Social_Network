const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const { models } = require("../database");

// Utils
const { hash_password, verify_password } = require("../utils/password");

async function register(req, res) {
  const { profile_name, email, password } = req.body;
  console.log(profile_name);
  try {
    const oldUser = await models.user.findOne({
      where: {
        email: email,
        isDeleted: false,
      },
    });

    if (oldUser) {
      return res.status(400).send("User Has Already Exist. Please Login");
    }

    bcrypt
      .hash(password, 12)
      .then(() => {
        // Create user in our database
        return (user = models.user.create({
          profile_name: profile_name,
          email: email.toLowerCase(),
          password: hash_password(password),
          isAdmin: false,
        }));
      })
      .then((user) => {
        res.status(201).json({
          status: "success",
          message: "User is registered successfully.",
          user,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "databse adding",
          message: JSON.stringify(error),
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error at registered",
      message: JSON.stringify(err),
    });
  }
}

async function login(req, res) {
  // Params
  const { email, password } = req.body;
  try {
    // Find User
    const user = await models.user.findOne({
      where: {
        email: email,
        isActive: true,
        isDeleted: false,
      },
    });

    // 404
    if (!user) {
      return res.status(404).json({
        status: "notFound",
        message: "User not found!",
      });
    }
    const userJSON = user.toJSON();
    if (!verify_password(password, userJSON.password)) {
      return res.status(400).json({
        status: "badRequest",
        message: "Wrong Password!",
      });
    }

    // Create token
    const token = JWT.sign(
      {
        id: user.id.toString(),
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // return new user
    return res.status(200).json({
      status: "success",
      message: "User is logined successfully",
      data: {
        token,
        userId: user.id.toString(),
        isAdmin: user.isAdmin
      },
    });
  } catch (err) {
    // Error
    console.log(err);
    return res.status(500).json({
      status: "error",
      message: JSON.stringify(err),
    });
  }
}

module.exports = { login, register };
