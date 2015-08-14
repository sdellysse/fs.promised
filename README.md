# Promise-implementation-agnostic wrapper for fs #

Promises/A+ are great. Node's default implementation of the fs module, using
callbacks, are not. What's also not great is a fs wrapper that is dependant
upon a specific promise implementation, especially since native promises have
landed in ES2015. This library intends to be a drop-in replacement for the
built-in fs module, where all the async functions now use Promises instead of
callbacks. Any other functions on the fs module are passed through untouched.

## Notes ##
* All the examples in this README will be using ES2015/ESnext. The library is
  written in ES5, Promises are just so much easier to work with in ES2015+.

* If you are using an older version of node, you need to polyfill the global
  Promise constructor.

  ```javascript
  global.Promise = require("bluebird");
  var fs = require("fs.promised");
  ```

## Usage ##

```javascript
/* ES2015 */
const fs = require("fs.promised");

const doSomething = function () {
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

/* ESnext */
const fs = require("fs.promised");

const doSomething = async function () {
    await fs.mkdir("/tmp/fs");
    await fs.writeFile("/tmp/fs/test", "blah blah blah");
    await fs.unlink("/tmp/fs/test");
}
```

### Caveats ###

* Exceptions:
    If the wrapped function throws an exception, the promise will be rejected
    with a value of `{ exception: <exception> }`. This is so that you can
    determine the difference between normal rejections and exceptions. This
    shouldn't matter as async fs functions shouldn't throw exceptions.

* Callbacks with multiple success values:
    This should only affect `fs.write` and `fs.read`. Functions that give a
    callback more than one success value (as in, values after the first "error"
    value) will be resolved with an array. Example:

    ```javascript
    /* ES2015 */
    fs.read(fd, data)
    .then(([written, string]) => {
        //...
    });

    /* ESnext */
    let [written, string] = await fs.read(fd, data);
    //...
    ```
