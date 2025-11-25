const getData = require('./index.js')

describe('Test throw error:', () => {
  test('Test async getData', () => {
    try {
      // throw new Error('Test some error1')
      getData()
    } catch ({ message }) {
      expect(message).toBe('Test some error')
    }
  })
})
