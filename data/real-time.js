const express = require("express");
const app = express();

const products = [
    { id: 1, name: "Laptop", price: 45000, image: "/img/laptop.jpg" },
    { id: 2, name: "Mobile Phone", price: 15000, image: "/img/phone.jpg" },
    { id: 3, name: "Headphones", price: 1200, image: "/img/headphone.jpg" }
];

app.get("/products", (req, res) => {
    const q = req.query.q?.toLowerCase() || "";

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(q)
    );

    res.json(filtered);
});

app.listen(3000, () => console.log("Server running on port 3000"));