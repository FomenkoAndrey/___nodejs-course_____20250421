import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

async function listFiles(dirPath) {
  const files = await readdir(dirPath)

  for (const file of files) {
    const filePath = path.join(dirPath, file)

    const stats = await stat(filePath)

    if (stats.isDirectory()) {
      await listFiles(filePath)
    } else {
      console.log(filePath)
    }
  }
}

listFiles('../')
