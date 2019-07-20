const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

function readDirRecurseSync(targetPath, filesContainer) {
    // Get all files
    const files = fs.readdirSync(targetPath)

    files.forEach(file => {
        if (fs.statSync(path.resolve(targetPath, file)).isFile()) {
            filesContainer.push(file)
        }
        else {
            readDirRecurseSync(path.resolve(targetPath, file), filesContainer)
        }
    })
}

function toListString(list) {
    return '[ ' + list.map(item => `"${chalk.green(item)}"`).join(', ') + ' ]'
}

module.exports = {
    readDirRecurseSync,
    toListString
}
