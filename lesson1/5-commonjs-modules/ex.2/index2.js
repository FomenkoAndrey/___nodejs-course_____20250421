console.log('Початковий стан exports (порожній):', module.exports)

module.exports = {
  name: 'CommonJS Module',
  version: '1.0.0',
  description: 'Приклад експорту даних'
}

console.log('Оновлений стан module.exports:', module.exports)
