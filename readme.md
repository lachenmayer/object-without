# object-without

Returns a new object with the given key(s) removed. Does not mutate the input object.

```
npm install @lachenmayer/object-without
```

```js
var without = require('@lachenmayer/object-without')

without({ a: 1, b: 2, c: 3 }, 'c') // { a: 1, b: 2 }
without({ a: 1, b: 2, c: 3 }, ['b', 'c']) // { a: 1 }
without({ a: 1, b: 2, c: 3 }, 'unchanged - no such key') // { a: 1, b: 2, c: 3 }
without([1, 2, 3], 1) // [1, undefined, 3]
without(null, 'anything') // null
```
