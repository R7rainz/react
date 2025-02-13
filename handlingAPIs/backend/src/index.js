"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api/products', (req, res) => {
    try {
        const products = [
            {
                id: 1,
                name: 'Laptop wood'
            },
            {
                id: 2,
                name: 'Mobile could'
            }
        ];
        const searchQuery = req.query.search;
        if (searchQuery && typeof searchQuery === 'string') {
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
            return res.json(filteredProducts);
        }
        setTimeout(() => {
            res.json(products);
        }, 3000);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
