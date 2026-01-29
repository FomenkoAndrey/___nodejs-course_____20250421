import fs from 'fs'

fs.readFile('./input.txt', (err, file) => {
  if (err) throw err

  fs.writeFile('./output.txt', file, (err) => {
    if (err) throw err
  })
})

/*
  ! Варіант через синхронні функції
  const file = fs.readFileSync('./input.txt')
  fs.writeFileSync('./output.txt', file)
 */
