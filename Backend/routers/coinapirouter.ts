import express, { Router } from 'express';
import { getAllTokens, getCurrency,getetheriumus, getethpan, getethsushi, } from '../controller/coinController';


const coinRouter: Router = express.Router();

coinRouter.get('/', getAllTokens);
coinRouter.get('/currency',getCurrency);
coinRouter.get('/etheriumvs', getetheriumus);
coinRouter.get('/ethsushi',getethsushi);
coinRouter.get('/ethpan', getethpan);

// Export the router
export default coinRouter;
