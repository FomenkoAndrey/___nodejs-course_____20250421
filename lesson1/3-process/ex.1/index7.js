console.log(process.release)

console.log('LTS Name:', process.release.lts)

if (process.release.lts !== 'Krypton') {
  throw new Error('Wrong Node.js LTS version (expected Krypton)')
}

console.log('Node version OK!', process.release.lts)
