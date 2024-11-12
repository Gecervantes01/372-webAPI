import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import chalk from 'chalk';

// read in our DB configuration
dotenv.config({
    path: "./configuration.env"
});

const { PORT, DB_DATABASE, DB_HOST, DB_PORT, DB_USER, 
    DB_PASSWORD} = process.env;

// Connect to db
const connect = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

console.log(chalk.blue(`Connected to database on localhost:${PORT}`));

// Export functions to access the db

async function getProducts() {
    const [results] = await connect.query('SELECT * FROM products');
    return results;

}

async function getProductById() {
    const [results] = await connect.query('SELECT * FROM products WHERE productId=?', [productId]);
    return results;
}

function addProduct() {
    
}

function updateProducts() {
    
}

function deleteProduct() {
    
}

export default {
    getProducts,
    getProductById,
    addProduct,
    updateProducts,
    deleteProduct
}