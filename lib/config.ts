export const db = {
    host: '127.0.0.1',
    port: '13306',
    user: 'root',
    password: '',
    database: 'hover',
    socketPath: './tmp/mysql/mysqld/mysqld.sock',
    charset: 'utf8mb4'
};

export interface BookmarkInterface {
    url: string,
    title: string
};