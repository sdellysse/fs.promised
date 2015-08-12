# Promise-implementation-agnostic wrapper for fs #

Promises/A+ are great. Node's default implementation of the fs module, using
callbacks, are not. What's also not great is a fs wrapper that is dependant
upon a specific promise implementation, especially since native promises have
landed in ES2015. This library intends to be a drop-in replacement for the
built-in fs module, where all the async functions now use Promises instead of
callbacks. Any other functions on the fs module are passed through untouched.

No more pyramid of doom:

```javascript
var fs = require("fs-promised-agnostic");

function doSomething () {
    return new Promise(function (resolve, reject) {
        Promise.resolve()
        .then(function () { return fs.mkdir("/tmp/fs") }; )
        .then(function () { return fs.writeFile("/tmp/fs/test", "blah blah blah") }; )
        .then(function () { return fs.unlink("/tmp/fs/test") }; )
        .then(
            function () { resolve(); },
            function (error) { reject(error); }
        );
    });
}

```

Even better with ES2015:

```javascript
const fs = require("fs-promised-agnostic");

function doSomething () {
    return new Promise((resolve, reject) => {
        Promise.resolve()
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

For ultimate development nirvana use async/await from ESnext via a transpiler:

```javascript
const fs = require("fs-promised-agnostic");

async function doSomething () {
    await fs.mkdir("/tmp/fs");
    await fs.writeFile("/tmp/fs/test", "blah blah blah");
    await fs.unlink("/tmp/fs/test");
}

```
