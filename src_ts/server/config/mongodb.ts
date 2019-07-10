// Initialize mongo db

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;
var url = process.env.COSMOS_URL;

let db = null;
async function initDB(){
	 MongoClient.connect(url, { useNewUrlParser: true }, async function(err, client) {
	  await assert.equal(null, err);
	  db = await client.db('familiesdb');
	});
}
initDB();

export {db, assert};