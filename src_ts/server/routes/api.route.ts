/* index.route.js
* by kueiapp.com
*/

// import express from 'express';
// import config from '../config/config.js';

import express,{Response,Request} from "express"

const router = express.Router();

/*
* GET localhost:[port]/api page.
* parent route is /api
*/
router.get('/', (req:Request, res:Response) => {
  res.send(`here is /api`);
});

import ARTICLEROUTE from "./article.route"
router.use('/article', ARTICLEROUTE);

// ES6
export default router;

// ES5
// module.exports = router;
