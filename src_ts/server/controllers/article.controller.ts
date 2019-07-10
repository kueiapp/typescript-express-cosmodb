/* article.controller.js
* by kueiapp.com
*/
import {Request, Response} from 'express';
import articleModule from '../modules/article.module';


const addArticle = function(req:Request, res:Response):void 
{
	// var inputData = {
 //    id: req.body.id, //req.params.id,
 //    title: req.body.title, //req.params.title,
 //    user_email: req.body.user_email //req.params.user_email
 //  }
  var inputData = req.body;
  console.log('server got post: ', inputData)
  
	articleModule.insertDocument()
  .then( function(result):void {
    res.header("Content-Type", "application/json")
    res.send(result);
  })
  .catch((err) => {
    return res.send(err);
  });
}

const getArticles = function(req:Request, res:Response):void 
{
  articleModule.findFamilies()
  .then( function(result):void {
    res.header("Content-Type", "application/json")
    res.send(result);
  })
  .catch((err) => {
    return res.send(err);
  });
};

const deleteArticle = function(req:Request, res:Response):void 
{
  console.log('ctrl delete '+req.body.id)
  articleModule.removeFamilies()
  .then( function(result):void {
    res.header("Content-Type", "application/json")
    res.send(result);
  })
  .catch((err) => {
    return res.send(err);
  });
};

const updateArticle = function(req:Request, res:Response):void 
{
  articleModule.updateFamilies()
  .then( function(result):void {
    res.header("Content-Type", "application/json")
    res.send(result);
  })
  .catch((err) => {
    return res.send(err);
  });
};


export default {
  getArticles,addArticle,deleteArticle,updateArticle
};
