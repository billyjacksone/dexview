import express, { Router } from 'express';
import { getethuniv3,getethuniswap,getethsushi,getethpan, getethshibaswap, getethdefiswap, getethkyberswap,
  getethfraxswap, getethswaper,getethradio, bnbpan, arbimain, polymain, pulsemain, bitmain} from '../controller/coinController';


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
coinRouter.get('/ethradio', getethradio);
coinRouter.get('/bnbpan', bnbpan);
coinRouter.get('/arbimain', arbimain);
coinRouter.get('/polymain',polymain);
coinRouter.get('/pulsemain', pulsemain);
coinRouter.get('/bitmain', bitmain);

// Export the router
export default coinRouter;
