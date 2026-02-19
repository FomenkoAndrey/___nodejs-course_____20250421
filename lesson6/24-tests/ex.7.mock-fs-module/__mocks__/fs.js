
const path = require('path');

const promises = {
  readFile: jest.fn((filename) => Promise.resolve('success')),

  access: jest.fn((filename) => Promise.resolve()),
};

module.exports = {
  promises,
};
