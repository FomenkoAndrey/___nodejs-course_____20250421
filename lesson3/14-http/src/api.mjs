import {
  rootTemplate,
  notFoundTemplate,
  todoFormTemplate,
  todoListTemplate,
  todos
} from './data.mjs'

export const handleGetRoot = (_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(rootTemplate())
}

export const handleGetTodoForm = (_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(todoFormTemplate())
}

export const handleGetText = (_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Plain text from server')
}

export const handleGetJson = (_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(todos))
}

export const handleGetTodos = (_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(todoListTemplate(todos))
}

export const handlePostTodos = (req, res) => {
  const contentType = req.headers['content-type']
  const isJson = contentType === 'application/json'
  const isForm = contentType === 'application/x-www-form-urlencoded'

  if (!isJson && !isForm) {
    res.statusCode = 400
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Unsupported Content-Type' }))
    return
  }

  let body = ''

  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', () => {
    let data

    if (isJson) {
      data = JSON.parse(body)
    } else if (isForm) {
      data = Object.fromEntries(new URLSearchParams(body))

      if (data.id) data.id = Number(data.id)
      if (data.completed) data.completed = data.completed === 'true'
    }

    todos.push(data)
    res.statusCode = 303
    res.setHeader('Location', '/todos')
    res.end()
  })
}

export const handleNotFound = (_req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end(notFoundTemplate())
}
