import { EventEmitter } from 'node:events'

const timeoutEventEmitter = new EventEmitter()

const timeoutListener = (seconds, unit = '') => {
  console.log(`Відбулася подія таймауту через ${seconds} ${unit}`)
}

timeoutEventEmitter.on('timeout', timeoutListener)

timeoutEventEmitter.once('singleEvent', () => {
  console.log(`Відбулася одноразова подія`)
})

setTimeout(() => timeoutEventEmitter.emit('timeout', 1, 'с'), 1000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 2, 'сек'), 2000)

setTimeout(() => timeoutEventEmitter.emit('timeout', 3, 'секунди'), 3000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 4, 'секунди'), 4000)
setTimeout(() => timeoutEventEmitter.emit('timeout', 5, 'секунд'), 5000)

setTimeout(() => timeoutEventEmitter.emit('singleEvent'), 500)
setTimeout(() => timeoutEventEmitter.emit('singleEvent'), 1500)
setTimeout(() => timeoutEventEmitter.emit('singleEvent'), 2500)

setTimeout(() => timeoutEventEmitter.off('timeout', timeoutListener), 2500)
