import dns from 'node:dns'

const SITE_NAME = 'gmail.com'

dns.resolve4(SITE_NAME, (error, addresses) => {
  if (error) {
    console.error('       IPv4 error:', error.message)
    return
  }
  console.log(addresses)
  console.log(`       IPv4:  ${addresses.join('  |  ')}`)
})

dns.resolve6(SITE_NAME, (error, addresses) => {
  if (error) {
    console.error('       IPv6 error:', error.message)
    return
  }
  console.log(`       IPv6:  ${addresses.join('  |  ')}`)
})

dns.resolve(SITE_NAME, 'A', (error, addresses) => {
  if (error) {
    console.error("   'A' IPv4 error:", error.message)
    return
  }
  console.log(`   'A' IPv4:  ${addresses.join('  |  ')}`)
})

dns.resolve(SITE_NAME, 'AAAA', (error, addresses) => {
  if (error) {
    console.error("'AAAA' IPv6 error:", error.message)
    return
  }
  console.log(`'AAAA' IPv6:  ${addresses.join('  |  ')}`)
})

// A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT
//   * IPv4: Приклад 172.217.20.227 (старий стандарт).
//   * IPv6: Приклад 2606:4700:4700::1111 (новий стандарт).
