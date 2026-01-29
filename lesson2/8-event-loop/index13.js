const fs = require('node:fs')
const dns = require('node:dns')

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

  // Вкладені мікрозадачі: виконуються в кінці поточної фази
  Promise.resolve().then(() => console.log(time(), 'Promise IN_DNS'))
  process.nextTick(() => console.log(time(), 'nextTick IN_DNS'))
})

dns.lookup('youtube.com', (err, address) => {
  console.log(time(), 'DNS (youtube.com):', address)
})

console.log(time(), 'end')
