import express, { RequestHandler } from 'express';

const app = express();

// Define the Product interface
interface Product {
    id: number;
    name: string;
}

// Define query interface
interface SearchQuery {
    search?: string;
}

// ✅ Use `RequestHandler` and explicitly return `void`
const getProducts: RequestHandler<{}, Product[], {}, SearchQuery> = (req, res): void => {
    console.log('Received request for /api/products');

    const products: Product[] = [
        { id: 1, name: 'Laptop wood' },
        { id: 2, name: 'Mobile could' }
    ];

    if (req.query.search) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search!.toLowerCase())
        );
        res.json(filteredProducts); // ✅ No return statement needed
        return;
    }

    setTimeout(() => {
        res.json(products);
    }, 3000);
};

// ✅ Correctly use the handler in `app.get()`
app.get('/api/products', getProducts);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
