import {db, BookmarkInterface} from "../db/db_core";

export class Bookmark {
    public getBookmarks() {
        return new Promise((resolve, reject) => {
            db.connection.query('select * from bookmark', (err, results) => {
                if (err) {
                    return reject(new Error('An error occured getting the bookmarks: ' + err));
                }

                resolve((results || []).map((bookmark) => {
                    return {
                        url: bookmark.url,
                        title: bookmark.title
                    };
                }));
            });
        });
    }

    public findById(id: number) {
        return new Promise((resolve, reject) => {
            db.connection.query('select * from bookmark where id = ?', [id], (err, results) => {
                if (err) {
                    return reject(new Error('An error occured getting the bookmark by id: ' + err));
                }

                resolve((results || []).map((bookmark) => {
                    return {
                        url: bookmark.url,
                        title: bookmark.title
                    };
                }));
            });
        });
    }

    public findByUrl(url: string) {
        return new Promise((resolve, reject) => {
            db.connection.query('select * from bookmark where url = ?', [url], (err, results) => {
                if (err) {
                    return reject(new Error('An error occured getting the bookmark by url: ' + err));
                }

                resolve((results || []).map((bookmark) => {
                    return {
                        url: bookmark.url,
                        title: bookmark.title
                    };
                }));
            });
        });
    }

    public findByTitle(title: string) {
        return new Promise((resolve, reject) => {
            db.connection.query('select * from bookmark where title = ?', [title], (err, results) => {
                if (err) {
                    return reject(new Error('An error occured getting the bookmark by title: ' + err));
                }

                resolve((results || []).map((bookmark) => {
                    return {
                        url: bookmark.url,
                        title: bookmark.title
                    };
                }));
            });
        });
    }

    public add(bookmark: BookmarkInterface) {
        const post = {url: bookmark.url, title: bookmark.title};
        db.connection.query('insert into bookmark set ? ', [post]);

        return this.findByUrl(bookmark.url);
    }
}

export const repository_bookmark = new Bookmark();
