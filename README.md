# Promise-implementation-agnostic wrapper for fs #

Promises/A+ are great. Node's default implementation of the fs module, using
callbacks, are not. What's also not great is a fs wrapper that is dependant
upon a specific promise implementation, especially since native promises have
landed in ES2015. This library intends to be a drop-in replacement for the
built-in fs module, where all the async functions now use Promises instead of
callbacks. Any other functions on the fs module are passed through untouched.

*NOTE:* If you are using an older version of node, you need to polyfill the
global Promise constructor.

```javascript
global.Promise = require("bluebird");
var fs = require("fs-promised-agnostic");
```


### Comparisons between different way of asynchronous programming in Javascript ###

Callback-based (pyramid of doom):

```javascript
var fs = require("fs");

function doSomething () {
    return new Promise(function (resolve, reject) {
        fs.mkdir("/tmp/fs", function (error) {
            if (error) {
                reject(error);
                return;
            }

            fs.writeFile("/tmp/fs/test", "blah blah blah", function (error) {
                if (error) {
                    reject(error);
                    return;
                }

                fs.unlink("/tmp/fs/test", function (error) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
        });
    });
}
```


Promise-based (no more pyramid of doom):

```javascript
var fs = require("fs-promised-agnostic");

function doSomething () {
    return new Promise(function (resolve, reject) {
        fs.mkdir("/tmp/fs")
        .then(function () { return fs.writeFile("/tmp/fs/test", "blah blah blah"); })
        .then(function () { return fs.unlink("/tmp/fs/test"); })
        .then(
            function () { resolve(); },
            function (error) { reject(error); }
        );
    });
}

```

ES2015 Arrow Functions used with Promises:

```javascript
const fs = require("fs-promised-agnostic");

function doSomething () {
    return new Promise((resolve, reject) => {
        fs.mkdir("/tmp/fs")
        .then(() => fs.mkdir("/tmp/fs"))
        .then(() => fs.writeFile("/tmp/fs/test", "blah blah blah"))
        .then(() => fs.unlink("/tmp/fs/test"))
        .then(
            () => resolve(),
            error => reject(error)
        );
    });
}

```

Async/Await from ESnext (using Babel or similar):

```javascript
const fs = require("fs-promised-agnostic");

async function doSomething () {
    await fs.mkdir("/tmp/fs");
    await fs.writeFile("/tmp/fs/test", "blah blah blah");
    await fs.unlink("/tmp/fs/test");
}

```
