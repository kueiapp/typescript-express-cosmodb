"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize the default app
var admin = require('firebase-admin');
var serviceAccount = require("./firebaseKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://curd-test-e10fb.firebaseio.com"
});
var firestore = admin.database();
exports.default = firestore;
//# sourceMappingURL=firestore.js.map