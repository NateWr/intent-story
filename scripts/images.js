import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = './src/assets/images'
const outputDir = './public/img'

// Clean up existing files
fs.readdirSync(outputDir)
  .forEach(file => {
    if (!file.includes('.gitkeep')) {
      fs.rmSync(
        path.join(outputDir, file)
      )
    }
  })

fs.readdirSync(inputDir)
  .forEach(file => {
    sharp(path.join(inputDir, file))
      .png({
        quality: 95,
        compression: 6,
      })
      .toFile(path.join(outputDir, file))
  })