
const getData = require('./index.js');

describe('Test throwing errors:', () => {
  test('getData throws an error (Generic check)', () => {
    expect(() => {
      getData();
    }).toThrow();
  });

  test('getData throws specific error message', () => {
    expect(() => getData()).toThrow('Test some error');
    expect(() => getData()).toThrow(/some error/);
  });

  test('getData throws specific Error class', () => {
    expect(() => getData()).toThrow(Error);
  });
});
