import {createConnection} from "mysql";
import {db as db_config} from "../../lib/config"

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