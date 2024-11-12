import { randomInt } from 'crypto';
import fs from 'fs/promises';

const tellAllJokes = async (req, res) => {
    const data = await fs.readFile('./jokes.json', 'utf-8');

    // convert json to js object notation
    const jokes = JSON.parse(data);
    
    res.status(200).send({
        message: `Telling all ${jokes.length} jokes...`,
        jokes
    });
};

const tellOneJoke = async (req, res) => {
    const data = await fs.readFile('./jokes.json', 'utf-8');

    // convert json to js object notation
    const jokes = JSON.parse(data);
    const randIndex = randomInt(jokes.length);
    const joke = jokes[randIndex];
    res.status(200).send({
        message: `Telling a joke...`,
        joke
    });
}

const updateJoke = async (req, res) => {
    // const {id, name, description, price} = req.body;
    // const data = fs.readFile('./producst.json', 'utf-8');

    // // convert json to js object notation
    // const products = JSON.parse(data);
        
    // const result = products.filter(product => product.id === id);
    // if (result.length !== 0) {
    //     const product = result[0];
    //     const updatedProduct = 
    //     {
    //         name,
    //         description,
    //         price
    //     };

    //     res.status(200).send({
    //         message: `Successfully updated  product with id: ${id}`,
    //         updatedProduct
    //     });
    // }
}

const delProd = async (req, res) => {
    // The ID of the product to be deleted
    // const productId = parseInt(req.params.id);
}

export {
    tellAllJokes,
    tellOneJoke
}