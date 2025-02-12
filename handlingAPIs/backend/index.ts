import express from 'express';

const app = express()


app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'laptop', price: 1000, image: 'laptop.jpg' },
        { id: 2, name: 'mouse', price: 10, image: 'mouse.jpg' },
        { id: 3, name: 'keyboard', price: 20, image: 'keyboard.jpg' }
    ];

    if (typeof req.query.search === 'string') {
        const filterProducts = products.filter(p => 
            p.name.toLowerCase().includes(req.query.search.toLowerCase())
        );   
        return res.send(filterProducts);
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})