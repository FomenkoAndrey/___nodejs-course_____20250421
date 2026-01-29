const fs = require('node:fs')
const dns = require('node:dns')

const time = () => `${performance.now().toFixed(2)} ms:`

console.log(time(), 'start')

setTimeout(() => console.log(time(), 'Timeout1'), 0)
setTimeout(() => console.log(time(), 'Timeout2'), 20)
setImmediate(() => console.log(time(), 'Immediate'))

// Сучасний аналог Promise.resolve().then()
queueMicrotask(() => console.log(time(), 'queueMicrotask'))

process.nextTick(() => console.log(time(), 'nextTick'))

fs.writeFile('./temp.txt', 'Hello', () => console.log(time(), 'writeFile'))

dns.lookup('localhost', (err, address) => {
  console.log(time(), 'DNS:', address)
  queueMicrotask(() => console.log(time(), 'queueMicrotask IN_DNS'))
  process.nextTick(() => console.log(time(), 'nextTick IN_DNS'))
})

console.log(time(), 'end')
