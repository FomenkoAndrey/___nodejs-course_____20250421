import { isMainThread, parentPort, Worker } from 'worker_threads'
import { fileURLToPath } from 'url'

if (isMainThread) {
  // main thread logic
  const __filename = fileURLToPath(import.meta.url)

  const worker = new Worker(__filename)

  console.log('--- Основний потік запущено ---')

  worker.on('message', (data) => {
    console.log('Дані від воркера:', data.result)
  })

  worker.on('exit', (code) => {
    console.log(`Потік завершився з кодом: ${code}`)
  })
} else {
  // worker thread logic
  console.log('   [Воркер почав обчислення...]')

  setTimeout(() => {
    const calculationResult = 2 ** 10

    parentPort.postMessage({ result: calculationResult })
  }, 1000)
}
