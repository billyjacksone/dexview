import express, { Router } from 'express';
import { getethuniv3,getethuniswap,getethsushi,getethpan, getethshibaswap, getethdefiswap, getethkyberswap,
  getethfraxswap, getethswaper, getethradio,
  bnbbaryon,bnbw3,bnbbakery,bnbcone,bnbknight, bnbnomi,  bnbkyber,bnbfst,bnbbaby,bnbmedx, bnbpan ,bnbape,bnbbiswap,bnbpanv3, 
  arbimain, arbiuniswapv3,arbisushi,arbikyber,arbicamelot,arbialien,arbizyber, arbioreo, arbiarbi,arbisharky,
  polymain,polyuniswapv3,polymmf,polyquickswap,polysushi,polykyber,polyape,
  pulsemain,pulseXv1,pulseXv2,
  bitmain,
  shibdogswap,shibwoofswap,
  platform,getchartvalue,
  platformname,
  getJUGNI, getLK, getGFR, getDAI} from '../controller/coinController';


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
coinRouter.get('/bnbpanv3',bnbpanv3);
coinRouter.get('/bnbape',bnbape);
coinRouter.get('/bnbbiswap', bnbbiswap);
coinRouter.get('/bnbape',bnbape);
coinRouter.get('/bnbmedx',bnbmedx);
coinRouter.get('/bnbbaby',bnbbaby);
coinRouter.get('/bnbfst',bnbfst);
coinRouter.get('/bnbkyber',bnbkyber);
coinRouter.get('/bnbnomi',bnbnomi);
coinRouter.get('/bnbknight',bnbknight);
coinRouter.get('/bnbcone',bnbcone);
coinRouter.get('/bnbbakery',bnbbakery);
coinRouter.get('/bnbw3',bnbw3);
coinRouter.get('/bnbbaryon',bnbbaryon);
// coinRouter.get('/bnbape',bnbape);



coinRouter.get('/arbimain', arbimain);
coinRouter.get('/arbiuniswapv3', arbiuniswapv3);
coinRouter.get('/arbisushi', arbisushi);
coinRouter.get('/arbikyber', arbikyber);
coinRouter.get('/arbicamelot', arbicamelot);
coinRouter.get('/arbialien', arbialien);
coinRouter.get('/arbizyber', arbizyber);
coinRouter.get('/arbioreo', arbioreo);
coinRouter.get('/arbiarbi', arbiarbi);
coinRouter.get('/arbisharky', arbisharky);



coinRouter.get('/polymain',polymain);
coinRouter.get('/polyuniswapv3', polyuniswapv3);
coinRouter.get('/polymmf', polymmf);
coinRouter.get('/polyquickswap', polyquickswap);
coinRouter.get('/polysushi', polysushi);
coinRouter.get('/polykyber', polykyber);
coinRouter.get('/polyape', polyape);




coinRouter.get('/pulsemain', pulsemain);
coinRouter.get('/pulseXv1', pulseXv1);
coinRouter.get('/pulseXv2', pulseXv2);


coinRouter.get('/bitmain', bitmain);

coinRouter.get('/shibdogswap', shibdogswap);
coinRouter.get('/shibwoofswap', shibwoofswap);

coinRouter.get('/platform', platform);
coinRouter.get('/platformname', platformname);

coinRouter.get('/chartvalue', getchartvalue);

coinRouter.get('/JUGNI', getJUGNI);
coinRouter.get('/LK', getLK);
coinRouter.get('/GFR', getGFR);
coinRouter.get('/DAI', getDAI);


// Export the router
export default coinRouter;
