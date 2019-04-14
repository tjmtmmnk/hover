import * as express from "express";
import {repository_bookmark} from "../lib/Repository/bookmark";
import {BookmarkInterface} from "../lib/config";
import {service_bookmark} from "../lib/Service/bookmark";


const app = express();
const port = 3000;
const repository = repository_bookmark;
const service = service_bookmark;

app.get('/', (req, res) => {
    const add_bookmark: BookmarkInterface = {url: 'add', title: 'title'};
    repository.add(add_bookmark).then(book => console.log(book));
    res.send('Hello world!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));