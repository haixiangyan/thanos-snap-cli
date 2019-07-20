const path = require('path')
const chalk = require('chalk')
const FileUtils = require('./utils/file')
const RandomUtils = require('./utils/random')

const targetPath = './test'

// Show target dir
console.log(chalk.blue(`📍 Target directory: ${path.resolve(targetPath)}...`))

// Get all files
let filesContainer = []
FileUtils.readDirRecurseSync(targetPath, filesContainer)
console.log(chalk.yellow(`📦 Scanned files: ${filesContainer.length}`))

// Randomly select files
const chosenFile = RandomUtils.randomHalfList(filesContainer)
console.log(chalk.red(`🧨  Chosen files: ${chosenFile.length}`))
console.log(chalk.red('💣 Are you ready to ring the finger? (y/n)'))

