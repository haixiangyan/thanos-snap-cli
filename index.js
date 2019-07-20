#!/usr/bin/env node
const path = require('path')
const chalk = require('chalk')
const FileUtils = require('./utils/file')
const RandomUtils = require('./utils/random')
const ora = require('ora')
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule();

const targetPath = './test'

// Show target dir
console.log(chalk.blue(`☠️  Target directory: ${path.resolve(targetPath)}`))

// Start loading
let loading = ora('Scanning files...').start();

// Get all files
let filesContainer = []
FileUtils.readDirRecurseSync(targetPath, filesContainer)

setTimeout(() => {
    loading.stop()
    // Show total files
    console.log(chalk.yellow(`📦 Scanned files: `) + FileUtils.toListString(filesContainer))

    // Randomly select files
    loading = ora('Randomly selecting files...').start();
    const selectedFiles = RandomUtils.randomHalfList(filesContainer)

    setTimeout(() => {
        loading.stop()
        // Show selected files
        console.log(chalk.yellow(`✨ Selected files: `) + FileUtils.toListString(selectedFiles))

        // Ask user if he truly wants to ring the finger
        prompt([{
            type: 'confirm',
            name: 'ring',
            message: '🚀 Ready to ring the finger? (y/n)'
        }]).then((answer) => {
            if (answer.ring) {
                console.log(chalk.yellow('💣 Deleting files...'))
                FileUtils.deleteFilesRecurse(targetPath, selectedFiles)
            }
            else {
                console.log('Bye.')
            }
        })
    }, 2000)
}, 2000)

