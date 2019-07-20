#!/usr/bin/env node
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const HintsUtils = require('./src/utils/hints')
const FileUtils = require('./src/utils/file')
const main = require('./src/main')

if (process.argv.length === 2) {
    // Mock
    FileUtils.createRandomFiles()
    console.log(chalk.yellow('/mock folder is created in your current directory. Now you can right the finger'))
    return
}

// Validate arguments
if (process.argv.length > 3) {
    // Show hints
    HintsUtils.showHints()
    return
}

// process.argv.length === 2
const userPath = process.argv[2]
const targetPath = path.resolve(__dirname, userPath)

// Validate path
if (!fs.existsSync(targetPath) || !fs.statSync(targetPath).isDirectory()) {
    console.log(chalk.red(`${targetPath} not exists or is not a directory`))
    return
}

// Main logic
main(targetPath)
