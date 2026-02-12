import dns from 'node:dns'

const SITE_NAME = 'google.com.ua'

dns.resolveNs(SITE_NAME, (error, addresses) => {
  if (error) {
    console.error('ResolveNs error:', error.message)
    return
  }
  console.log(addresses)
})

// ns1.google.com
