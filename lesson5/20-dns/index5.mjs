import dns from 'node:dns'

const SITE_NAME = 'google.com.ua'

dns.resolve(SITE_NAME, 'A', (error, addresses) => {
  if (error) {
    console.error(error.message)
    return
  }

  console.log(addresses) // [ '142.250.186.195' ]

  if (addresses && addresses.length > 0) {
    dns.reverse(addresses[0], (error, namesHosts) => {
      if (error) console.error(error.message)
      else console.log(namesHosts) // [ 'waw07s05-in-f3.1e100.net' ]
    })
  }
})
