import { fork } from 'child_process'
import { fileURLToPath } from 'url'

if (process.send) {
  // child logic
  setTimeout(() => {
    process.send({ msg: 'Привіт з дочірнього процесу!' })

    process.exit(0)
  }, 1000)
} else {

  // parent logic
  const __filename = fileURLToPath(import.meta.url)

  const child = fork(__filename)

  console.log('--- Батьківський процес запущено ---')

  child.on('message', (data) => {
    console.log('Повідомлення отримано:', data.msg)
  })

  child.on('exit', (code) => {
    console.log(`Дочірній процес завершився з кодом: ${code}`)
  })
}
