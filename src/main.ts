import * as express from "express";
import * as mysql from "mysql";

const app = express();
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '13306',
    user: 'root',
    password: '',
    database: 'hover',
    socketPath: './tmp/mysql/mysqld/mysqld.sock'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query('select * from bookmark', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();

const port = 3000;

app.get('/', (req, res) => {

    res.send('Hello world!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
