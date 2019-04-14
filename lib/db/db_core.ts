import {createConnection} from "mysql";
import {db as db_config} from "../../lib/config"

class DbCore {
    private connection;

    public constructor() {
        this.connection = createConnection(db_config);

        this.connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
        });
    }

    public do_query(sql: string) {
        this.connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
    }

    public end() {
        this.connection.end();
    }
}

export const connection = new DbCore();