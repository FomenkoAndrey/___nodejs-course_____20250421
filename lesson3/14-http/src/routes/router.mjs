import {
  generateHtml,
  generate404,
  generateJson,
  postData,
  generateText,
  generateTodos,
  generateForm
} from '../api.mjs'

export const handleRequest = async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    generateHtml(req, res)
    return
  }

  if (req.method === 'GET' && req.url === '/text') {
    generateText(req, res)
    return
  }

  if (req.method === 'GET' && req.url === '/json') {
    generateJson(req, res)
    return
  }

  if (req.method === 'GET' && req.url === '/todos') {
    generateTodos(req, res)
    return
  }
  if (req.method === 'POST' && req.url === '/todos') {
    postData(req, res)
    return
  }

  if (req.method === 'GET' && req.url === '/form') {
    generateForm(req, res)
    return
  }

  generate404(req, res)
}
