const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

mongoose
  .connect(process.env.MONGOID) // Use the actual environment variable
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("Mongo Error", err);
  });
