import * as express from "express";
import {Repository} from "../lib/Repository/bookmark";
import Bookmark = Repository.Bookmark;
import {BookmarkInterface} from "../lib/config";


const app = express();
const bookmark = new Repository.Bookmark();
const port = 3000;

app.get('/', (req, res) => {
    const add_bookmark: BookmarkInterface = {url: 'add', title: 'title'};
    bookmark.add(add_bookmark).then(book => console.log(book));
    res.send('Hello world!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));