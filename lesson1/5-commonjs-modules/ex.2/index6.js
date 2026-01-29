//  ПРИКЛАД 1: Перевірка та імпорт існуючого модуля
try {
  require.resolve('test-module')
  console.log('[OK] Модуль знайдено.')
  require('test-module')
} catch (err) {
  console.error("[ERROR] Помилка завантаження обов'язкового модуля.")
}

//  ПРИКЛАД 2: Безпечне підключення опціонального функціоналу
try {
  require('some-module')
} catch (err) {
  console.log('[INFO] Опціональний модуль "some-module" не знайдено. Програма продовжує роботу.')
}
