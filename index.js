"use strict";

if (typeof Promise === "undefined") {
    throw new Error("Must have a global Promise constructor");
}

var fs = require("fs");

var promisify = function (func) {
    return function () {
        var self = this;
        var funcArgs = Array.prototype.slice.call(arguments);

        return new Promise(function (resolve, reject) {
            var cb = function () {
                var error = arguments[0];
                var args = Array.prototype.slice.call(arguments, 1);

                if (error) {
                    reject(error);
                } else {
                    resolve.apply(null, args);
                }
            };

            var args = funcArgs.concat([cb]);

            try {
                func.apply(self, args);
            } catch (exception) {
                reject({ exception: exception });
            }
        });
    };
};

module.exports = {
    rename: promisify(fs.rename),
    renameSync: fs.readSync,

    ftruncate: promisify(fs.ftruncate),
    ftruncateSync: fs.ftruncateSync,

    truncate: promisify(fs.truncate),
    truncateSync: fs.truncateSync,

    chown: promisify(fs.chown),
    chownSync: fs.chownSync,

    fchown: promisify(fs.fchown),
    fchownSync: fs.fchownSync,

    lchown: promisify(fs.lchown),
    lchownSync: fs.lchownSync,

    chmod: promisify(fs.chmod),
    chmodSync: fs.chmodSync,

    fchmod: promisify(fs.fchmod),
    fchmodSync: fs.fchmodSync,

    lchmod: promisify(fs.lchmod),
    lchmodSync: fs.lchmodSync,

    stat: promisify(fs.stat),
    statSync: fs.statSync,

    lstat: promisify(fs.lstat),
    lstatSync: fs.lstatSync,

    fstat: promisify(fs.fstat),
    fstatSync: fs.fstatSync,

    link: promisify(fs.link),
    linkSync: fs.linkSync,

    symlink: promisify(fs.symlink),
    symlinkSync: fs.symlinkSync,

    readlink: promisify(fs.readlink),
    readlinkSync: fs.readlinkSync,

    realpath: promisify(fs.realpath),
    realpathSync: fs.realpathSync,

    unlink: promisify(fs.unlink),
    unlinkSync: fs.unlinkSync,

    rmdir: promisify(fs.rmdir),
    rmdirSync: fs.rmdirSync,

    mkdir: promisify(fs.mkdir),
    mkdirSync: fs.mkdirSync,

    readdir: promisify(fs.readdir),
    readdirSync: fs.readdirSync,

    close: promisify(fs.close),
    closeSync: fs.closeSync

    open: promisify(fs.open),
    openSync: fs.openSync,

    utimes: promisify(fs.utimes),
    utimesSync: fs.utimesSync,

    futimes: promisify(fs.futimes),
    futimesSync, fs.futimesSync,

    fsync: promisify(fs.fsync),
    fsyncSync: fs.fsyncSync,

    write: promisify(fs.write),
    writeSync: fs.writeSync,

    read: promisify(fs.read),
    readSync: fs.readSync,

    readFile: promisify(fs.readFile),
    readFileSync: fs.readFileSync,

    writeFile: promisify(fs.writeFile),
    writeFileSync: fs.writeFileSync,

    appendFile: promisify(fs.appendFile),
    appendFileSync: fs.appendFileSync,

    watchFile: fs.watchFile,
    unwatchFile: fs.unwatchFile,
    watch: fs.watch,

    exists: promisify(fs.exists),
    existsSync: fs.existsSync,

    access: promisify(fs.access),
    accessSync: fs.accessSync,

    Stats: fs.Stats,
    createReadStream: fs.createReadStream,
    ReadStream: fs.ReadStream,
    createWriteStream: fs.createWriteStream,
    WriteStream: fs.WriteStream,
    FSWatcher: fs.FSWatcher,
};
