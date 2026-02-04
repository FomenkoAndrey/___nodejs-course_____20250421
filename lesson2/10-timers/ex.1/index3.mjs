const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

setInterval(async () => {
  console.log('Цей код виконається кожні 5 секунд')
  await wait(4000)

  console.log('Додаткова логіка, триває 4 секунда')
}, 5000)
