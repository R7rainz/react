import express, { Request, Response } from 'express';

// Define the Product interface
interface Product {
    id: number;
    name: string;
}

const app = express();

app.get('/api/products', (req: Request, res: Response) => {
    try {
        const products: Product[] = [
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
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return res.json(filteredProducts);
        }

        setTimeout(() => {
            res.json(products);
        }, 3000);

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});