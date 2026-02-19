
const { getType, createUser } = require('./index.js');

test('getType correctly identifies basic data types', () => {
  expect(getType(123)).toBe('number');
  expect(getType('test')).toBe('string');
  expect(getType(true)).toBe('boolean');
  expect(getType(undefined)).toBe('undefined');
});

test('getType handles special objects', () => {
  expect(getType({})).toBe('object');
  expect(getType([])).toBe('object');
  expect(getType(null)).toBe('object');
});

test('createUser returns object with dynamic values', () => {
  const user = createUser('Alice');

  expect(user).toEqual({
    id: expect.any(Number),
    name: 'Alice',
    createdAt: expect.any(Date),
  });
});

test('string matching with regex', () => {
  expect(getType({})).toEqual(expect.stringMatching(/obj/));
});
