"use strict";
/* config.js
* by kueiapp.com
* global config
*/
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    version: '1.0.0',
    env: 'development',
    port: 3000
};
var db = {
    "MYSQL_HOST": "localhost",
    "MYSQL_PORT": 3306,
    "MYSQL_USER": "root",
    "MYSQL_PASS": "1234",
    "MYSQL_DATABASE": "articles"
};
// ES6
exports.default = { config: config, db: db };
//# sourceMappingURL=setting.js.map