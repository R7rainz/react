"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Define the getProducts handler
const getProducts = (req, res) => {
    console.log('Received request for /api/products');
    const products = [
        { id: 1, name: 'Laptop wood' },
        { id: 2, name: 'Mobile could' }
    ];
    if (req.query.search) {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()));
        res.json(filteredProducts);
        return;
    }
    setTimeout(() => {
        res.json(products);
    }, 3000);
};
// Use the handler in `app.get()`
app.get('/api/products', getProducts);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
