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

app.get('/api/products', (req: Request<{}, {}, {}, SearchQuery, Record<string, any>>, res: Response) => {
    const products: Product[] = [
        { id: 1, name: 'Laptop wood' },
        { id: 2, name: 'Mobile cloud' }
    ];

    if (req.query.search) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search!.toLowerCase())
        );
        return res.json(filteredProducts);
    }

    setTimeout(() => {
        res.json(products);
    }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
