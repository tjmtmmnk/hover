"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var config = require("../lib/");
var app = express();
var connection = mysql.createConnection(config.db);
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
var port = 3000;
app.get('/', function (req, res) {
    connection.query('select * from bookmark', function (error, results, fields) {
        if (error)
            throw error;
        console.log(results);
    });
    connection.end();
    res.send('Hello world!');
});
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
//# sourceMappingURL=main.js.map