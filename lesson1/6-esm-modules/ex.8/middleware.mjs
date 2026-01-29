import { user } from './source.mjs'

try {
  user.name = 'Bob'
  user.age = 25
} catch (error) {
  console.error('! Помилка при зміні:', error.message)
}

export { user }
