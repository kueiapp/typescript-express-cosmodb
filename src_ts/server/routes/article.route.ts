/*/ article.route.js
* by kueiapp.com
*/

import express from 'express';
import articleCtrl from '../controllers/article.controller';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json() ) // for POST body

// === /api/article
router.route('/')
  .get( articleCtrl.getArticles )
  .post( articleCtrl.addArticle )
  .delete( articleCtrl.deleteArticle )
  .put( articleCtrl.updateArticle )

export default router;
