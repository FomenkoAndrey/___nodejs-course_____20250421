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

// Швидка I/O операція (зазвичай кешована)
dns.lookup('localhost', (err, address) => {
  console.log(time(), 'DNS (localhost):', address)
})

// Реальний мережевий запит (повільніше)
dns.lookup('youtube.com', (err, address) => {
  console.log(time(), 'DNS (youtube.com):', address)
})

console.log(time(), 'end')
