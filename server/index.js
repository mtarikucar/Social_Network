const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
require("dotenv").config();

app = express();

var corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const sequelize = require("./database");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });


const userRoutes = require("./routers/users")
const postsRoutes = require("./routers/posts")
const communityRoutes = require("./routers/community")
const authRoutes = require("./routers/auth")

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', postsRoutes);
app.use('/api/carts', communityRoutes);
app.use('/api/auth', authRoutes);


app.listen(process.env.PORT, () => {
  console.log(
    process.env.NODE_ENV && process.env.NODE_ENV === "development"
      ? `Started: http://localhost:${process.env.PORT}`
      : "Started: "
  );
});
