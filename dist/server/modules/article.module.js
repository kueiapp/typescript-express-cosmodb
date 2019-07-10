"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_module_1 = __importDefault(require("./db.module"));
var firestore_1 = __importDefault(require("../config/firestore"));
var insertArticle = function (inputData) {
    return new Promise(function (resolve, reject) {
        // get from db.module
        db_module_1.default.getConnection(function (connectionError, connection) {
            if (connectionError) {
                reject(connectionError);
            }
            else {
                connection.query("INSERT INTO favorite SET ?", [inputData], function (error, result) {
                    if (error) {
                        console.error('SQL error: ', error);
                        reject(error);
                    }
                    else if (result.affectedRows === 1) {
                        resolve({ "code": 200, "msg": "Insert successfully！", "data": inputData });
                    }
                    // release memory
                    connection.release();
                });
            }
        });
    });
};
var selectArticle = function () {
    return new Promise(function (resolve, reject) {
        // get from db.module
        db_module_1.default.getConnection(function (connectionError, connection) {
            if (connectionError) {
                reject(connectionError);
            }
            else {
                connection.query("SELECT * FROM favorite", function (error, result) {
                    if (error) {
                        console.error('SQL error: ', error);
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                    // release memory
                    connection.release();
                });
            }
        });
    });
};
var deleteArticle = function (aid) {
    return new Promise(function (resolve, reject) {
        // get from db.module
        db_module_1.default.getConnection(function (connectionError, connection) {
            if (connectionError) {
                reject(connectionError);
            }
            else {
                connection.query("DELETE FROM favorite WHERE id = ? ", [aid], function (error, result) {
                    if (error) {
                        console.error('SQL error: ', error);
                        reject(error);
                    }
                    else if (result.affectedRows === 1) {
                        resolve({ "code": 200, "msg": "DELETE successfully！" });
                    }
                    // release memory
                    connection.release();
                });
            }
        });
    });
};
/** Firebase functions
* @func: getTalkFromFirebase: get data from FireStore
* @func: addTalkToFirebase: add data to FireStore
*/
var getTalkFromFirebase = function () {
    return new Promise(function (resolve, reject) {
        try {
            resolve(firestore_1.default.collection('talk').orderBy('name'));
        }
        catch (err) {
            reject(err);
        }
    });
};
var addTalkToFirebase = function (_name, _msg) {
    return new Promise(function (resolve, reject) {
        var talk = firestore_1.default.ref("talk");
        if (talk.set({ name: _name, message: _msg })) {
            resolve({ "code": 200, "msg": "OK！" });
        }
        else {
            reject({ "code": 401, "msg": "Failed!" });
        }
    });
};
exports.default = {
    selectArticle: selectArticle, insertArticle: insertArticle, deleteArticle: deleteArticle, getTalkFromFirebase: getTalkFromFirebase, addTalkToFirebase: addTalkToFirebase
};
//# sourceMappingURL=article.module.js.map