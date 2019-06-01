import {appendFileSync, writeFileSync, readFileSync} from "fs";
import {repository_bookmark} from "../Repository/bookmark";

require('dotenv').config();

export class Bookmark {
    private now_bookmark_list;
    private new_bookmark_list = [];

    constructor() {
        this.fetchBookmark()
            .then(() => {
                const parse = require("hatebu-mydata-parser").parse;
                const searchData = readFileSync("/app/search.data", "utf-8");
                this.now_bookmark_list = parse(searchData);
                this.addNotExistBookmark(this.now_bookmark_list);
            })
            .catch(e => console.log(e));
    }

    private addNotExistBookmark(bookmarks) {
        Promise.all(bookmarks.map(bookmark => {
            return this.add(bookmark);
        }))
            .then(() => {
                this.createBookmarkList(this.new_bookmark_list);
            })
            .catch((err) => console.log(err));
    }

    private fetchBookmark() {
        return new Promise((resolve, reject) => {
            const OAuth = require('oauth');
            const oauth = new OAuth.OAuth(
                '',
                '',
                process.env.CONSUMER_KEY,
                process.env.CONSUMER_KEY_SECRET,
                '1.0',
                null,
                'HMAC-SHA1'
            );

            oauth.get(
                process.env.HATEBU_URL,
                process.env.ACCESS_TOKEN,
                process.env.ACCESS_TOKEN_SECRET,
                function (e, data, res) {
                    if (e) reject(e);
                    writeFileSync('search.data', data);
                    resolve("fetched");
                });
        });
    }

    private add(bookmark) {
        return new Promise((resolve, reject) => {
            repository_bookmark.findByUrl(bookmark.url).then((result) => {
                if (!Object.keys(result).length) {
                    repository_bookmark.add(bookmark).then(new_bookmark => {
                        resolve(this.new_bookmark_list.push(new_bookmark));
                    });
                } else {
                    resolve("alredy exist");
                }
            });
        });
    }

    public createBookmarkList(bookmarks) {
        if (Object.keys(bookmarks).length) {
            const head_template =
                "<!DOCTYPE NETSCAPE-Bookmark-file-1>\n" +
                "<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\">\n" +
                "<DL><p>\n" +
                "<DL><p>\n" +
                "<DL><p>\n";

            writeFileSync('bookmark.html', head_template);

            bookmarks.forEach((bookmark) => {
                const def = "<DT><A HREF=\"" + bookmark[0]["url"] + "\">" + bookmark[0]["title"] + "</A>\n"
                appendFileSync('bookmark.html', def);
            });

            const foot_template =
                "</DL><p>\n" +
                "</DL><p>\n" +
                "</DL><p>\n";

            appendFileSync('bookmark.html', foot_template);
        }
    }
}

export const service_bookmark = new Bookmark();