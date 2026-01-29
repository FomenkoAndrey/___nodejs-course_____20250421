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
  Promise.resolve().then(() => console.log(time(), 'Promise IN_DNS'))
  process.nextTick(() => console.log(time(), 'nextTick IN_DNS'))
})

console.log(time(), 'end')


/*
  ! Simple Diagram
  24.06 ms: |---start---|
  31.61 ms: |       ---end---|
  31.90 ms: |         ---nextTick---|
  32.04 ms: |          ---Promise---|
  32.24 ms: |           ---Timeout1---|
  32.41 ms: |                ---Immediate---|
  32.69 ms: |                 ---writeFile---|
  34.25 ms: |                      ---DNS: ::1---|
  34.46 ms: |                       ---nextTick IN_DNS---|
  34.77 ms: |                        ---Promise IN_DNS---|
  55.69 ms: |                                     ---Timeout2---|
*/
