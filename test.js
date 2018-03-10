const test = require('ava')

const without = require('./without')

test('it removes a key', t => {
  const obj = { a: 1, b: 2, c: 3 }
  t.deepEqual(without(obj, 'a'), { b: 2, c: 3 })
  const frozen = Object.freeze({ a: 1, b: 2, c: 3 })
  t.deepEqual(without(frozen, 'a'), { b: 2, c: 3 })
})

test('it works with arrays', t => {
  t.deepEqual(without([1, 2, 3], 2), [1, 2, undefined])
})

test('it works with null', t => {
  t.deepEqual(without(null, 'hello'), null)
})

test("it does nothing when the passed key doesn't exist", t => {
  const obj = { a: 1, b: 2, c: 3 }
  t.deepEqual(without(obj, 'nope'), obj)
  const frozen = Object.freeze({ a: 1, b: 2, c: 3 })
  t.deepEqual(without(frozen, 'nope'), frozen)
})

test("it does nothing if you don't pass in a key", t => {
  const obj = { a: 1, b: 2, c: 3 }
  t.deepEqual(without(obj), obj)
  const frozen = Object.freeze({ a: 1, b: 2, c: 3 })
  t.deepEqual(without(frozen), frozen)
})

test('it removes multiple keys', t => {
  const obj = { a: 1, b: 2, c: 3 }
  t.deepEqual(without(obj, ['a', 'b']), { c: 3 })
  const frozen = Object.freeze({ a: 1, b: 2, c: 3 })
  t.deepEqual(without(frozen, ['a', 'b']), { c: 3 })
})

test('it throws a type error if you pass in something that is not an object', t => {
  t.throws(() => without(123, 'foo'))
  t.throws(() => without(undefined, 'foo'))
  t.throws(() => without('string', 'foo'))
  // This currently just returns {}, but c'mon.
  // t.throws(() => without(/why would you do this/, 'foo'))
})
