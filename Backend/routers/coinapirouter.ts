import express, { Router } from 'express';
import { getAllTokens } from '../controller/coinController';

// Create a new router
const coinRouter: Router = express.Router();

// Define your routes
coinRouter.get('/', getAllTokens);

// Export the router
export default coinRouter;
