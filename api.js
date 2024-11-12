import express from 'express';
import chalk from 'chalk';

import productRouter from './routers/productsRouter.js';
import jokesRouter from './routers/jokesRouter.js';

const app = express();
const PORT = 4242;

// serve static files from the /public directory
app.use(express.static("./public"));

// configure your web server to parse JSON in a request body
app.use(express.json());

//Mount the router
app.use('/api/v1/products', productRouter);
app.use('/api/v1/jokes', jokesRouter);

app.listen(PORT, () => {
    console.log(chalk.bgCyanBright('Server started...'));
});