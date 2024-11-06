const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/poracure")
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("Mongo Error", err);
  });
