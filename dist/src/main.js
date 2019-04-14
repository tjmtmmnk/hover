"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_core_1 = require("../lib/db/db_core");
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    db_core_1.connection.do_query('select * from bookmark');
    res.send('Hello world!');
});
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
//# sourceMappingURL=main.js.map