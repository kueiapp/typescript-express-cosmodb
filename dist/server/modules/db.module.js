"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* by kueiapp.com
*/
// ES6
var mysql_1 = __importDefault(require("mysql"));
var setting_1 = __importDefault(require("../config/setting"));
// create a connection
var connectionPool = mysql_1.default.createPool({
    connectionLimit: 10,
    host: setting_1.default.db.MYSQL_HOST,
    user: setting_1.default.db.MYSQL_USER,
    password: setting_1.default.db.MYSQL_PASS,
    database: setting_1.default.db.MYSQL_DATABASE
});
connectionPool.getConnection(function (err, connection) {
    if (err) {
        console.log('Connection failed！');
    }
    else {
        console.log("connection successfally");
    }
});
exports.default = connectionPool;
//# sourceMappingURL=db.module.js.map