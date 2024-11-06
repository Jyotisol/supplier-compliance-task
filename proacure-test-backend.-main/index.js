const express = require("express");
const app = express();

require("./Config/Config");
const cors = require("cors");
const products = require("./Products.json");
const Products = require("./Models/products");
const port = 3500;

// app.use(cors());
app.use(cors({
  origin: "http://localhost:3000",  // Replace with your frontend URL
  methods: ["GET", "POST"]
}));

app.use(express.json());

// Products API
app.get("/api/products", (req, res) => {
  return res.json(products);
});

// Search API
app.get("/api/search", (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : "";
  const results = products.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
  res.json(results);
});

//Add Product API
app.post("/api/require", async (req, res) => {
  console.log("Request received:", req.body);  // Log request data
  try {
    let product = new Products(req.body);
    let result = await product.save();
    console.log("Product saved:", result);  // Log the saved result
    res.status(201).json(result);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Error saving product" });
  }
});



app.listen(port, () => console.log(`port started at PORT ${port}!`));


