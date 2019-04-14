import * as express from "express";
import {connection} from "../lib/db/db_core";

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    connection.do_query('select * from bookmark');
    res.send('Hello world!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));