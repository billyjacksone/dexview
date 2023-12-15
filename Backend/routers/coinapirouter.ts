import express, { Router } from 'express';
import { getAllTokens, getCurrency } from '../controller/coinController';

// Create a new router
const coinRouter: Router = express.Router();

// Define your routes
coinRouter.get('/', getAllTokens);
coinRouter.get('/currency',getCurrency)

// Export the router
export default coinRouter;
