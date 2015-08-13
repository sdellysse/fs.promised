/**
 * Copyright (c) 2015, Shawn Dellysse
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

"use strict";

if (typeof Promise === "undefined") {
    throw new Error("Must have a global Promise constructor");
}

var fs = require("fs");
var promisfy = require("./promisfy");


module.exports = {
    rename: promisfy(fs.rename),
    renameSync: fs.readSync,

    ftruncate: promisfy(fs.ftruncate),
    ftruncateSync: fs.ftruncateSync,

    truncate: promisfy(fs.truncate),
    truncateSync: fs.truncateSync,

    chown: promisfy(fs.chown),
    chownSync: fs.chownSync,

    fchown: promisfy(fs.fchown),
    fchownSync: fs.fchownSync,

    lchown: promisfy(fs.lchown),
    lchownSync: fs.lchownSync,

    chmod: promisfy(fs.chmod),
    chmodSync: fs.chmodSync,

    fchmod: promisfy(fs.fchmod),
    fchmodSync: fs.fchmodSync,

    lchmod: promisfy(fs.lchmod),
    lchmodSync: fs.lchmodSync,

    stat: promisfy(fs.stat),
    statSync: fs.statSync,

    lstat: promisfy(fs.lstat),
    lstatSync: fs.lstatSync,

    fstat: promisfy(fs.fstat),
    fstatSync: fs.fstatSync,

    link: promisfy(fs.link),
    linkSync: fs.linkSync,

    symlink: promisfy(fs.symlink),
    symlinkSync: fs.symlinkSync,

    readlink: promisfy(fs.readlink),
    readlinkSync: fs.readlinkSync,

    realpath: promisfy(fs.realpath),
    realpathSync: fs.realpathSync,

    unlink: promisfy(fs.unlink),
    unlinkSync: fs.unlinkSync,

    rmdir: promisfy(fs.rmdir),
    rmdirSync: fs.rmdirSync,

    mkdir: promisfy(fs.mkdir),
    mkdirSync: fs.mkdirSync,

    readdir: promisfy(fs.readdir),
    readdirSync: fs.readdirSync,

    close: promisfy(fs.close),
    closeSync: fs.closeSync,

    open: promisfy(fs.open),
    openSync: fs.openSync,

    utimes: promisfy(fs.utimes),
    utimesSync: fs.utimesSync,

    futimes: promisfy(fs.futimes),
    futimesSync: fs.futimesSync,

    fsync: promisfy(fs.fsync),
    fsyncSync: fs.fsyncSync,

    write: promisfy(fs.write),
    writeSync: fs.writeSync,

    read: promisfy(fs.read),
    readSync: fs.readSync,

    readFile: promisfy(fs.readFile),
    readFileSync: fs.readFileSync,

    writeFile: promisfy(fs.writeFile),
    writeFileSync: fs.writeFileSync,

    appendFile: promisfy(fs.appendFile),
    appendFileSync: fs.appendFileSync,

    watchFile: fs.watchFile,
    unwatchFile: fs.unwatchFile,
    watch: fs.watch,

    exists: promisfy(fs.exists),
    existsSync: fs.existsSync,

    access: promisfy(fs.access),
    accessSync: fs.accessSync,

    Stats: fs.Stats,
    createReadStream: fs.createReadStream,
    ReadStream: fs.ReadStream,
    createWriteStream: fs.createWriteStream,
    WriteStream: fs.WriteStream,
    FSWatcher: fs.FSWatcher,
};
