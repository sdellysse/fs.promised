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

module.exports = promisify;
