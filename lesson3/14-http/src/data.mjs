import {
  createHTMLTemplate,
  rootContent,
  notFoundContent,
  todoFormContent,
  todoListContent
} from './strings.mjs'

export const rootTemplate = () => createHTMLTemplate(rootContent)

export const notFoundTemplate = () =>
  createHTMLTemplate(notFoundContent, '404 - Not Found')

export const todoFormTemplate = () =>
  createHTMLTemplate(todoFormContent, 'Create New Todo')

export const todoListTemplate = (todos) =>
  createHTMLTemplate(todoListContent(todos), 'Todo List')

export const todos = [
  {
    id: 1,
    title: 'Learn Node.js',
    completed: true
  },
  {
    id: 2,
    title: 'Learn Express.js',
    completed: false
  },
  {
    id: 3,
    title: 'Learn MongoDB',
    completed: false
  },
  {
    id: 4,
    title: 'Build a REST API',
    completed: false
  },
  {
    id: 5,
    title: 'Deploy to Vercel',
    completed: false
  }
]
