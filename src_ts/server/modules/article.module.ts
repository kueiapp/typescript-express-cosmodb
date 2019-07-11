/**
* by kueiapp.com
*/
// ES6
import {db, assert} from '../config/mongodb'
import {MongoError} from 'mongodb'

var insertDocument = function() {
  return new Promise( function (resolve, reject){
    db.collection('families').insertOne( 
      {
          "id": "Youtuber",
          "lastName": "Mao",
          "parents": [
              { "firstName": "Alan" },
              { "firstName": "Kiki" }
          ],
          "children": [
              { "firstName": "John", "gender": "male", "grade": 7 },
              { "firstName": "John2", "gender": "male", "grade": 17 }
          ],
          "pets": [
              { "givenName": "HowHow" }
          ],
          "address": { "country": "TW", "state": "TW", "city": "Taipei" }
      }, 
      function(err:MongoError, result) {
        assert.equal(err, null);
        // console.log(result)
        if(err){
          reject(err)
        }
        else{
          resolve({"code":200, "msg": "OK!"});
        }
    });
  });
};

var findFamilies = function() {
  return new Promise( function (resolve, reject){ 
    var cursor = db.collection('families').find();
    let results = []
    cursor.each( async function(err:MongoError, doc) {
        assert.equal(err, null);
        if(err) {
          reject(err)
        }
        else {
          if (doc != null) {
            results.push(doc)
          } 
          else {
            resolve({"code": "200", "msg":"OK", "data":results})
          }
        }
    });
  });
};

var updateFamilies = function() {
  return new Promise( function (resolve, reject){ 
    db.collection('families').updateOne(
      { "lastName" : "Andersen" }, // update target
      {
          $set: { 
            "pets": [
              { "givenName": "666666" },
              { "givenName": "555555"}
            ] 
          },
          $currentDate: { "lastModified": true }
      }, 
      function(err:MongoError, results) {
        if(!err){
          if(results.modifiedCount === 1){
            resolve({"code":200, "msg":"data modifed"})
          }
        }
        else{
          reject(err)
        }
    });
  });
};

var removeFamilies = function() {
  return new Promise( function (resolve, reject){ 
    db.collection('families').deleteMany(
        { "lastName": "KiKi" }, // delete conditions
        function(err:MongoError, results) {
            if(!err){
              resolve({"code":200, "msg":`${results.deletedCount} data deleted`})
            }
            else{
              reject(err)
            }
        }
    );
  });
};


export default {
  insertDocument,findFamilies,updateFamilies,removeFamilies
};
