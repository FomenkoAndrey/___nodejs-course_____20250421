import { EventEmitter } from 'node:events'

const timeoutEventEmitter = new EventEmitter()

timeoutEventEmitter.on('timeout', (seconds, unit = '') => {
  console.log(`Відбулася подія таймауту через ${seconds} ${unit}`)
})

timeoutEventEmitter.on('timeoutSecond', (seconds, unit = '') => {
  console.log('Відбулася подія timeoutSecond')
})

timeoutEventEmitter.on('timeoutThird', (seconds, unit = '') => {
  console.log('Відбулася подія timeoutThird')
})

console.log('Назви подій:', timeoutEventEmitter.eventNames())
