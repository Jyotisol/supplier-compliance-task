const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  supplier: String,
  product: String,
  category: String,
  quantity: String,
  location: String,
  required: String,
});

module.exports = mongoose.model("product", productSchema);
