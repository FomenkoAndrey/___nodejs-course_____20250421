import http from 'node:http'
import {
  handleGetRoot,
  handleGetTodoForm,
  handleGetText,
  handleGetJson,
  handleGetTodos,
  handlePostTodos,
  handleNotFound
} from './api.mjs'

const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return handleGetRoot(req, res)
  }

  if (req.method === 'GET' && req.url === '/form') {
    return handleGetTodoForm(req, res)
  }

  if (req.method === 'GET' && req.url === '/text') {
    return handleGetText(req, res)
  }

  if (req.method === 'GET' && req.url === '/json') {
    return handleGetJson(req, res)
  }

  if (req.method === 'GET' && req.url === '/todos') {
    return handleGetTodos(req, res)
  }

  if (req.method === 'POST' && req.url === '/todos') {
    return handlePostTodos(req, res)
  }

  handleNotFound(req, res)
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
