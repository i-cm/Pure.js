# Pure.js
Pure.js is a JavaScript library for caching pure functions.

## How to use
To use Pure.js, you first download [Pure.js](https://github.com/i-cm/Pure.js/blob/main/Pure.js), then you put `import pure from "/main.js"` on top of your JavaScript file, `"/main.js"` can be changed to a path where you installed the libary.

After importing, you can now use the `pure(func)` function where `func` is a function which has to be a pure function, which means it outputs the same thing with the same input and doesn't modify the global scope.

After creating a `pure(func)` function, you then pass in the arguments, let's look at an example:

1. Make a pure function
2. Convert the function definition to `var someFunction = pure((args...) => ...)`
3. Done, now pass arguments and get the result, pass the same arguments again and you get the cached result.
