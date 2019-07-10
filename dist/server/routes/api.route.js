"use strict";
/* index.route.js
* by kueiapp.com
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// import config from '../config/config.js';
var express_1 = __importDefault(require("express"));
var setting = require("../config/setting");
var router = express_1.default.Router();
/*
* GET localhost:[port]/api page.
* parent route is /api
*/
router.get('/', function (req, res) {
    res.send("here is /api");
});
var article_route_1 = __importDefault(require("./article.route"));
router.use('/article', article_route_1.default);
// ES6
exports.default = router;
// ES5
// module.exports = router;
//# sourceMappingURL=api.route.js.map