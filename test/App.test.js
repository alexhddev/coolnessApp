import { sayHi } from '../src/App.js';
import { test, describe } from "node:test"
import assert from "node:assert"

describe('App', () => {
  test('should say hi', () => {
    const expected = 'Hello from John';
    const actual = sayHi('John');
    assert.strictEqual(actual, expected);
  });
});

