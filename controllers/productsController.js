import fs from 'fs/promises';
import db from './../db/productsDb.js';

const getAll = async (req, res) => {
    const products = await db.getProducts();
    res.status(200).send({
        message: `Returning ${products.length} products`,
        products
    });
};

const getById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const result = await db.getProductById(productId);

    if(result.length !== 0) {
        const product = result[0];
        res.status(200).send({
            message: `Returning product with id ${productId}`,
            product
        });
    } else {
        res.status(404).send({
            message: `Couldn't find product with id: ${productId}`
        });
    }
}

const addProd = async (req, res) => {
    try {
        const {name, description, price} = req.body;
    
        const data = await fs.readFile('./products.json', 'utf-8');
    
        // convert json to js object notation
        const products = JSON.parse(data);
        const product = {
            id: products.length,
            name,
            description,
            price
        };
        products.push(product);
        
        await fs.writeFile('./products.json', JSON.stringify(products, null, 2), 'utf-8');
    
        res.status(201).send( {
            message: `Product added with ID: ${product.id}`
        })
    } catch(err) {
        console.error(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

const updateProd = async (req, res) => {
    const {id, name, description, price} = req.body;
    const data = fs.readFile('./producst.json', 'utf-8');

    // convert json to js object notation
    const products = JSON.parse(data);
        
    const result = products.filter(product => product.id === id);
    if (result.length !== 0) {
        const product = result[0];
        const updatedProduct = 
        {
            name,
            description,
            price
        };

        res.status(200).send({
            message: `Successfully updated  product with id: ${id}`,
            updatedProduct
        });
    }
}

const delProd = async (req, res) => {
    // The ID of the product to be deleted
    const productId = parseInt(req.params.id);
}

export { 
    getAll,
    getById,
    addProd,
    updateProd,
    delProd 
};