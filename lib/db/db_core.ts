import {createConnection} from "mysql";
require('dotenv').config();

const db_config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    socketPath: process.env.DB_SOCKET_PATH,
    charset: process.env.DB_CHARSET
};


export interface BookmarkInterface {
    url: string,
    title: string
};

class DbCore {
    public connection;

    public constructor() {
        this.connection = createConnection(db_config);

        this.connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
        });
    }

    public end() {
        this.connection.end();
    }
}

export const db = new DbCore();