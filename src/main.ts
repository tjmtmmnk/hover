import * as express from "express";
import {repository_bookmark} from "../lib/Repository/bookmark";
import {service_bookmark} from "../lib/Service/bookmark";


const app = express();
const port = 3000;
const repository = repository_bookmark;
const service = service_bookmark;

app.get('/', (req, res) =>{
    res.send('Hello world!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));