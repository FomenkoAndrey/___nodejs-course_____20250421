const path = require('node:path')

const basePath = '/home/user/docs'
const targetPath = '/home/user/docs/file.txt'

const relativePath = path.relative(basePath, targetPath)

console.log(relativePath)

const basePath2 = '/home/user/projects'
const targetPath2 = '/home/user/docs/file.txt'

const relativePath2 = path.relative(basePath2, targetPath2)

console.log(relativePath2)

/*
  ! Візуалізація переходів між шляхами:

  Приклад 1:
  basePath:   /home/user/docs
  targetPath: /home/user/docs/file.txt

  Структура:
  /home/user/docs/           (базовий шлях)
              └── file.txt   (цільовий файл)

  Результат: "file.txt" (цільовий файл знаходиться на 1 рівень глибше)


  Приклад 2:
  basePath:   /home/user/projects
  targetPath: /home/user/docs/file.txt

  Структура:
  /home/user/
      ├── projects/          (базовий шлях)
      └── docs/
          └── file.txt       (цільовий файл)

  Результат: "../docs/file.txt" (потрібно піднятися на 1 рівень вгору,
                                  потім увійти в папку docs)

  Легенда:
  ".."  - перехід на рівень вгору (до батьківської директорії)
  "/"   - роздільник директорій
  "name" - ім'я файлу або директорії
*/
