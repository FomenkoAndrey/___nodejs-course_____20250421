if (!process.release.lts) {
  throw new Error('Current Node.js version is not LTS')
}

console.log('LTS status confirmed:', process.release.lts)
