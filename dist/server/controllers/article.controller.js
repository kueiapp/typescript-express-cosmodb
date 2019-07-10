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
    article_module_1.default.insertDocument()
        .then(function (result) {
        res.header("Content-Type", "application/json");
        res.send(result);
    })
        .catch(function (err) {
        return res.send(err);
    });
};
var getArticles = function (req, res) {
    article_module_1.default.findFamilies()
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
    article_module_1.default.removeFamilies()
        .then(function (result) {
        res.header("Content-Type", "application/json");
        res.send(result);
    })
        .catch(function (err) {
        return res.send(err);
    });
};
var updateArticle = function (req, res) {
    article_module_1.default.updateFamilies()
        .then(function (result) {
        res.header("Content-Type", "application/json");
        res.send(result);
    })
        .catch(function (err) {
        return res.send(err);
    });
};
exports.default = {
    getArticles: getArticles, addArticle: addArticle, deleteArticle: deleteArticle, updateArticle: updateArticle
};
//# sourceMappingURL=article.controller.js.map