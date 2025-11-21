import fs from 'fs/promises'

const createHtmlTemplate = (htmlInjection) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  ${htmlInjection}
</body>

</html>
    `
}

export const rootHtmlTemplate = createHtmlTemplate(
  '<h1>Hello from Node.js HTTP server</h1>'
)

export const generateTodosTemplate = (todos) => {
  const headerHTML = `<h1>Todo List</h1>`

  const todosHTML = todos
    .map(
      (todo) => `
    <div>
      <h2>${todo.title}</h2> 
      <p>Todo ID: ${todo.id}</p>
      <p>User ID: ${todo.userId}</p>
      <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
    </div>
    `
    )
    .join('')

  const buttonHTML = `
      <button type="button" onclick="location.href='/form'">Add New Todo</button>
    `

  return createHtmlTemplate(headerHTML + todosHTML + buttonHTML)
}

export const notFoundTemplate = createHtmlTemplate('<h1>404 - Not Found</h1>')

export const loadTemplate = async (filePath) => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8')
    console.log(`🚀 Template ${filePath} завантажено`)
    return fileContent
  } catch (error) {
    console.error(`Error loading template ${filePath}:`, error)
    return null
  }
}

export const loadFormTemplate = async () => {
  return await loadTemplate('./src/views/form.html')
}
