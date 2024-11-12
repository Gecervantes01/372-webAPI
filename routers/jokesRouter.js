import { Router } from 'express';
import { tellAllJokes, tellOneJoke } from '../controllers/jokesController.js';

// Create router
const jokesRouter = Router();

// All routes
jokesRouter.get('/', tellAllJokes);
jokesRouter.get('/one', tellOneJoke)

export default jokesRouter;
