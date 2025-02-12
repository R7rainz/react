import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [{
        id: 1,
        name: 'Laptop wood'
    }, {
        id: 2,
        name: 'Mobile could'
    }]

    if(req.query.search){
        const filteredproducts = products.filter(product => product.name.includes(req.query.search));
        res.send(filteredproducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log( `Server is running on port ${port}` );
});

