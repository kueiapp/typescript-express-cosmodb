"use strict";
/* app.js
* by kueiapp.com
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ES6
var setting_1 = __importDefault(require("./config/setting"));
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
// ES5
// const express = require('express');
// const bodyParser = require('body-parser');
// Express
var app = express_1.default();
// morgan for debugging route
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
// create application/json parser to support json encoded bodies
var jsonParser = body_parser_1.default.json();
// create application/x-www-form-urlencoded parser
app.use(body_parser_1.default.urlencoded({ extended: false })); // false:string, true:all types
var port = process.env.PORT || setting_1.default.config.port;
/** node.js main **/
app.listen(port, function () {
    console.log("Listening on ", port);
});
/* GET home page. */
// related to /api
app.get('/', function (req, res) {
    res.send("on http://127.0.0.1:" + setting_1.default.config.port + " (" + setting_1.default.config.env + ")");
});
var api_route_1 = __importDefault(require("./routes/api.route"));
app.use('/api', api_route_1.default);
// export default app;
module.exports = app;
//# sourceMappingURL=app.js.map