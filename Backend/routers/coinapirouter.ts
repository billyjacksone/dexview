import express, { Router } from 'express';
import { getethuniv3,getethuniswap,getethsushi,getethpan, getethshibaswap, getethdefiswap, getethkyberswap,
  getethfraxswap, getethswaper } from '../controller/coinController';


const coinRouter: Router = express.Router();

coinRouter.get('/', getethuniv3);
coinRouter.get('/ethuniswap',getethuniswap);
coinRouter.get('/ethsushi', getethsushi);
coinRouter.get('/ethpan',getethpan);
coinRouter.get('/ethshiba', getethshibaswap);
coinRouter.get('/ethdefi', getethdefiswap);
coinRouter.get('/ethkyber', getethkyberswap);
coinRouter.get('/ethfrax', getethfraxswap);
coinRouter.get('/ethswaper', getethswaper);

// Export the router
export default coinRouter;
