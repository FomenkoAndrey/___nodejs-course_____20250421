const fs = require('fs')
const dns = require('dns')

const time = () => `${performance.now().toFixed(2)} ms:`

console.log(time(), 'start')

setTimeout(() => console.log(time(), 'Timeout1'), 0)
setTimeout(() => console.log(time(), 'Timeout2'), 20)

setImmediate(() => console.log(time(), 'Immediate'))

Promise.resolve().then(() => console.log(time(), 'Promise'))

process.nextTick(() => console.log(time(), 'nextTick'))

fs.writeFile('./temp.txt', 'Hello', () => console.log(time(), 'writeFile'))

dns.lookup('localhost', (err, address) => {
  console.log(time(), 'DNS:', address)
  Promise.resolve().then(() => console.log(time(), 'Promise IN_DNS'))
  process.nextTick(() => console.log(time(), 'nextTick IN_DNS'))
})

console.log(time(), 'end')
