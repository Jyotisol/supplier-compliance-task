import React, { useState } from "react";

const NewItem = () => {
  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [location, setLocation] = useState("");
  const [required, setRequired] = useState("");
  const [error, setError] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const addProduct = async (event) => {
    event.preventDefault();
    if (
      !supplier ||
      !product ||
      !category ||
      !quantity ||
      !timeline ||
      !location ||
      !required
    ) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await fetch("http://localhost:3500/api/require", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          supplier,
          product,
          category,
          quantity,
          timeline,
          location,
          required,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product. Server error.");
      }

      const result = await response.json();
      setResponseMessage("Product added successfully!");
      console.log(result);

      // Reset form fields
      setSupplier("");
      setProduct("");
      setCategory("");
      setQuantity("");
      setTimeline("");
      setLocation("");
      setRequired("");
    } catch (error) {
      console.error("Error in fetching:", error);
      setResponseMessage("Failed to add product. Please try again.");
    }
  };

  return (
    <>
      <div className="addProduct">
        <form onSubmit={addProduct}>
          <h1>Require Product</h1>
          {responseMessage && <p className="response">{responseMessage}</p>}
          <input
            type="text"
            placeholder="Enter supplier name"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
          {error && !supplier && <span className="invalid">Enter valid supplier name</span>}
          
          <input
            type="text"
            placeholder="Enter product information"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          {error && !product && <span className="invalid">Enter valid product name</span>}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Select a category</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
            <option value="TV">TV</option>
          </select>
          {error && !category && <span className="invalid">Select a category</span>}

          <input
            type="text"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {error && !quantity && <span className="invalid">Enter valid quantity</span>}

          <input
            type="date"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          />
          {error && !timeline && <span className="invalid">Select a valid timeline</span>}

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled>Select a location</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mysore">Mysore</option>
            <option value="Bijapur">Bijapur</option>
            <option value="Bidar">Bidar</option>
          </select>
          {error && !location && <span className="invalid">Select a location</span>}

          <input
            type="text"
            placeholder="Required for"
            value={required}
            onChange={(e) => setRequired(e.target.value)}
          />
          {error && !required && <span className="invalid">Enter valid requirement description</span>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default NewItem;
