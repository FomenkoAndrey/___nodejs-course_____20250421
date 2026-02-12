import dns from 'node:dns'

const SITE_NAME = 'meta.ua'

dns.resolveMx(SITE_NAME, (error, mxRecords) => {
  if (error) {
    console.error('ResolveMx error:', error.message)
    return
  }
  console.log(mxRecords)
})

//   [
//     { exchange: 'mxs2.meta.ua', priority: 20 },
//     { exchange: 'mxs3.meta.ua', priority: 30 }
//   ]
