import express from 'express';
import {
    getAll,
    getById,
    addProd,
    updateProd,
    delProd
} from '../controllers/productsController.js';

// Create router
const productRouter = express.Router();

// All routes
productRouter.get('/', getAll);
productRouter.get('/:id', getById);
productRouter.post('/', addProd);
productRouter.patch('/', updateProd);
productRouter.delete('/', delProd);

export default productRouter;