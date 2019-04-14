"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bookmark_1 = require("../lib/Repository/bookmark");
var app = express();
var bookmark = new bookmark_1.Repository.Bookmark();
var port = 3000;
app.get('/', function (req, res) {
    var add_bookmark = { url: 'add', title: 'title' };
    bookmark.add(add_bookmark).then(function (book) { return console.log(book); });
    res.send('Hello world!');
});
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
//# sourceMappingURL=main.js.map