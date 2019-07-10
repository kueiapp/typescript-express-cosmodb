/* app.js
* by kueiapp.com
*/

// ES6
import morgan from 'morgan';
import express,{Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// ES5
// const express = require('express');
// const bodyParser = require('body-parser');

// Express
const app:Application = express();

// morgan for debugging route
app.use(morgan('dev'));
app.use(cors())
// create application/json parser to support json encoded bodies
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }) )// false:string, true:all types

const port = process.env.PORT || 3000;

/** node.js main **/
app.listen(port, function() {
  console.log("Listening on ",port);
});

/* GET home page. */
// related to /api
app.get('/', (req, res) => {
  res.send(`on http://127.0.0.1`);
});

import APIROUTE from './routes/api.route';
app.use('/api', APIROUTE);


// export default app;
module.exports = app;
