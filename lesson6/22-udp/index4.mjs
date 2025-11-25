import dgram from 'node:dgram'
import { HOST, MESSAGE, PORT } from './constants.mjs'

const client = dgram.createSocket('udp4')

// Початкові дані 'Welocome aboard!'
// 1 частина: 'Welcome '
client.send(MESSAGE, 0, 8, PORT, HOST, (error) => {
  if (error) throw error

  console.log('UDP message sent')

  // 2 частина: 'aboard'
  client.send(MESSAGE, 8, 6, PORT, HOST, (error) => {
    if (error) throw error

    console.log('UDP message sent')

    // 3 частина: '!'
    client.send(MESSAGE, 14, 1, PORT, HOST, (error) => {
      if (error) throw error

      console.log('UDP message sent')
      client.close()
    })
  })
})
