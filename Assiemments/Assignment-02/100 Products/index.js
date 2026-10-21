// Create REST API for 100 products with id, name, price, description
// Implement GET, POST, PUT and DELETE requests for products.

import express from "express";

const app = express();

app.use(express.json());

let products = [];

for (let i = 1; i <= 100; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        price: i * 100,
        description: `This is the description of Product ${i}`
    });
}

// GET all products
app.get("/products", (req, res) => {
    res.json(products);
});

// POST - Add a new product
app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

// PUT - Update a product
app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;

    res.json(product);
});

// DELETE - Delete a product
app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});