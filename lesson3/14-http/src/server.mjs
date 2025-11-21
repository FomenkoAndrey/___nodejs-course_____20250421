import http from 'node:http'
import { handleRequest } from './routes/router.mjs'

const PORT = 3000

const server = http.createServer(handleRequest)

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
