import {
  loadFormTemplate,
  rootHtmlTemplate,
  notFoundTemplate,
  generateTodosTemplate
} from './data.mjs'
import { todos } from './model/todos.mjs'
import querystring from 'node:querystring'

export const generateHtml = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(rootHtmlTemplate)
}

export const generateText = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, this is plain text response')
}

let formTemplate = null

export const initFormTemplate = async () => {
  formTemplate = await loadFormTemplate()
  return formTemplate
}

export const generateForm = async (req, res) => {
  if (!formTemplate) {
    formTemplate = await initFormTemplate()
  }

  if (!formTemplate) {
    console.error('Form template could not be loaded.')
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end('Error loading form template')
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(formTemplate)
  }
}

export const generateJson = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'Hello, this is a JSON response' }))
}

export const generateTodos = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(todos))
}

export const postData = (req, res) => {
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = ''

    req.on('data', (chunk) => (body += chunk.toString()))

    req.on('end', () => {
      let todo = querystring.parse(body)

      todo = {
        id: +todo.id,
        title: todo.title,
        userId: +todo.userId,
        completed: todo.completed === 'on'
      }

      todos.push(todo)

      res.statusCode = 201
      res.end(generateTodosTemplate(todos))
    })
  } else if (req.headers['content-type'] === 'application/json') {
    let dataJSON = ''
    req.on('data', (chunk) => (dataJSON += chunk))

    req.on('end', () => {
      try {
        todos.push(JSON.parse(dataJSON))
        res.statusCode = 201
        res.end('Data received successfully')
      } catch (error) {
        res.statusCode = 400
        res.end('Invalid JSON data')
      }
    })
  } else {
    res.statusCode = 400
    res.setHeader('Content-Type', 'text/plain')
    res.end('Data unknown type')
  }
}

export const generate404 = (req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end(notFoundTemplate)
}
