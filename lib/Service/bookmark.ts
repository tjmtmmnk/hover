import {appendFileSync, writeFileSync, readFileSync} from "fs";
import {repository_bookmark} from "../Repository/bookmark";

export class Bookmark {
    private now_bookmark_list;
    private new_bookmark_list = [];

    constructor() {
        const parse = require("hatebu-mydata-parser").parse;
        const searchData = readFileSync("/app/search.data", "utf-8");
        this.now_bookmark_list = parse(searchData);
        this.now_bookmark_list.forEach((bookmark) => this.add(bookmark));
        this.new_bookmark_list.forEach(t => console.log(t));
    }

    public add(bookmark) {
        repository_bookmark.findByUrl(bookmark.url).then((result) => {
            if (!Object.keys(result).length){
                repository_bookmark.add(bookmark).then(new_bookmark => console.log(new_bookmark));
            }
        });
    }

    public createBookmarkList(bookmarks) {
        if (Object.keys(bookmarks).length) {
            const template =
                "<!DOCTYPE NETSCAPE-Bookmark-file-1>\n" +
                "<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\">\n" +
                "<DL><p>";

            writeFileSync('bookmark.html', template);

            bookmarks.forEach((bookmark) => {
                const def = "<DT><A HREF=\"" + bookmark["url"] + "\">" + bookmark["title"] + "</A>\n"
                appendFileSync('bookmark.html', def);
            });

            appendFileSync('bookmark.html', "</DL><p>");
        }
    }
}

export const service_bookmark = new Bookmark();