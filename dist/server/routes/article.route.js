"use strict";
/*/ article.route.js
* by kueiapp.com
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var article_controller_1 = __importDefault(require("../controllers/article.controller"));
var body_parser_1 = __importDefault(require("body-parser"));
var router = express_1.default.Router();
router.use(body_parser_1.default.json()); // for POST body
// === /api/article
router.route('/')
    .get(article_controller_1.default.getArticles)
    .post(article_controller_1.default.addArticle)
    .delete(article_controller_1.default.deleteArticle)
    .put(article_controller_1.default.updateArticle);
exports.default = router;
//# sourceMappingURL=article.route.js.map