/**
* by kueiapp.com
*/
// ES6
import {db,assert} from '../config/mongodb'

var insertDocument = function() {
  return new Promise( function (resolve, reject){
    db.collection('families').insertOne( {
            "id": "AndersenFamily",
            "lastName": "Andersen",
            "parents": [
                { "firstName": "Thomas" },
                { "firstName": "Mary Kay" }
            ],
            "children": [
                { "firstName": "John", "gender": "male", "grade": 7 }
            ],
            "pets": [
                { "givenName": "Fluffy" }
            ],
            "address": { "country": "USA", "state": "WA", "city": "Seattle" }
        }, 
      function(err, result) {
        assert.equal(err, null);
        if(err){
          reject(err)
        }
        else{
          resolve({"code":200, "msg": "OK！"});
        }
    });
  });
};

var findFamilies = function() {
  return new Promise( function (resolve, reject){ 
    var cursor = db.collection('families').find();
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            resolve({"code":200, "msg": "OK！", "data":doc});
        } else {
            reject(err)
        }
    });
  });
};

var updateFamilies = function() {
  return new Promise( function (resolve, reject){ 
    db.collection('families').updateOne(
        { "lastName" : "Andersen" },
        {
            $set: { "pets": [
                { "givenName": "Fluffy" },
                { "givenName": "Rocky"}
            ] },
            $currentDate: { "lastModified": true }
        }, 
      function(err, results) {
        if(!err){
          resolve(results)
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
        { "lastName": "Andersen" },
        function(err, results) {
            if(!err){
              resolve(results)
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
