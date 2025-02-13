import express, { Request, Response } from 'express';

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

// Define the getProducts handler
const getProducts = (
    req: Request<{}, {}, {}, SearchQuery>,
    res: Response<Product[]>
): void => {
    console.log('Received request for /api/products');

    const products: Product[] = [
        { id: 1, name: 'Laptop wood' },
        { id: 2, name: 'Mobile could' }
    ];

    if (req.query.search) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search!.toLowerCase())
        );
        res.json(filteredProducts);
        return;
    }

    setTimeout(() => {
        res.json(products);
    }, 3000);
};

// ✅ Attach the handler correctly
app.get('/api/products', getProducts as unknown as express.RequestHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
