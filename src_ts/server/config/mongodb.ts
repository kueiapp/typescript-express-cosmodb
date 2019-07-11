// Initialize mongo db
const MongoClient = require('mongodb').MongoClient;
import assert from 'assert'

// Init dotenv file in TypeScript
import dotenv from "dotenv";
dotenv.config();

const url = process.env.COSMOS_URL;
console.log('url: '+url)

let db = null;
MongoClient.connect(url, 
	{
 		useNewUrlParser: true, 
 		connectWithNoPrimary: true
 	},
	async function(err, client) {
		assert.equal(null, err);
		db = await client.db('familiesdb');
});

export {db, assert}