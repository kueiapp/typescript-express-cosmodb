"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var article_module_1 = __importDefault(require("../modules/article.module"));
var addArticle = function (req, res) {
    // var inputData = {
    //    id: req.body.id, //req.params.id,
    //    title: req.body.title, //req.params.title,
    //    user_email: req.body.user_email //req.params.user_email
    //  }
    var inputData = req.body;
    console.log('server got post: ', inputData);
    article_module_1.default.insertArticle(inputData)
        .then(function (result) {
        res.header("Content-Type", "application/json");
        res.send(result);
    })
        .catch(function (err) {
        return res.send(err);
    });
};
var getArticles = function (req, res) {
    article_module_1.default.selectArticle()
        .then(function (result) {
        res.header("Content-Type", "application/json");
        res.send(result);
    })
        .catch(function (err) {
        return res.send(err);
    });
};
var deleteArticle = function (req, res) {
    console.log('ctrl delete ' + req.body.id);
    article_module_1.default.deleteArticle(req.body.id)
        .then(function (result) {
        res.header("Content-Type", "application/json");
        res.send(result);
    })
        .catch(function (err) {
        return res.send(err);
    });
};
/** Firebase functions
* @func: getTalks: get data from FireStore
* @func: addTalk: add data to FireStore
*/
var getTalks = function (req, res) {
    article_module_1.default.getTalkFromFirebase()
        .then(function (result) {
        res.header("Content-Type", "application/json");
        res.send(result);
    })
        .catch(function (err) {
        return res.send(err);
    });
};
var addTalk = function (req, res) {
    // var inputData = {
    //    id: req.body.id, //req.params.id,
    //    title: req.body.title, //req.params.title,
    //    user_email: req.body.user_email //req.params.user_email
    //  }
    var inputData = req.body;
    console.log('server got post: ', inputData);
    article_module_1.default.addTalkToFirebase(inputData.name, inputData.message)
        .then(function (result) {
        res.header("Content-Type", "application/json");
        res.send(result);
    })
        .catch(function (err) {
        return res.send(err);
    });
};
exports.default = {
    getArticles: getArticles, addArticle: addArticle, deleteArticle: deleteArticle, addTalk: addTalk, getTalks: getTalks
};
//# sourceMappingURL=article.controller.js.map