import dns from 'node:dns'

const SITE_NAME = 'google.com.ua'

dns.lookup(SITE_NAME, (error, address) => {
  if (error) {
    console.error('Lookup error:', error.message)
    return
  }
  console.log(`Site name: ${SITE_NAME} \n      DNS: ${address}`)
})
