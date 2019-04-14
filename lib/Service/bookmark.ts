import {appendFileSync, writeFileSync, readFileSync} from "fs";

export class Bookmark {
    private now_bookmark_list;

    constructor() {
        const parse = require("hatebu-mydata-parser").parse;
        const searchData = readFileSync("/app/search.data", "utf-8");
        this.now_bookmark_list = parse(searchData);
        this.createBookmarkList(this.now_bookmark_list);
    }

    public createBookmarkList(bookmarks) {
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

export const service_bookmark = new Bookmark();