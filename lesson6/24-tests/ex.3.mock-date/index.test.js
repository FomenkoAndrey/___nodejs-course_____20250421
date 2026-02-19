
const { getFormattedDate } = require('./index.js');

test('getFormattedDate returns correct date for fixed point in time', () => {
  jest.useFakeTimers();

  jest.setSystemTime(new Date('2023-12-17'));

  const result = getFormattedDate();

  expect(result).toBe('17-12-2023');

  jest.useRealTimers();
});
