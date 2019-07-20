const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

function readDirRecurseSync(targetPath, filesContainer) {
    // Get all files
    const files = fs.readdirSync(targetPath)

    files.forEach(file => {
        // Is file ?
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

function deleteFilesRecurse(targetPath, names) {
    // Get all files
    const files = fs.readdirSync(targetPath)

    files.forEach(file => {
        // Is file ?
        if (fs.statSync(path.resolve(targetPath, file)).isFile()) {
            if (names.indexOf(file) > -1) {
                // fs.unlinkSync(path.resolve(targetPath, file))
                console.log(chalk.red('✨ Deleted: ' + path.resolve(targetPath, file)))
            }
        }
        else {
            deleteFilesRecurse(path.resolve(targetPath, file), names)
        }
    })
}

function createRandomFiles() {
    fs.writeFileSync('./test/a.js')
    fs.writeFileSync('./test/b.js')
    fs.writeFileSync('./test/c.js')
    fs.writeFileSync('./test/e.js')
}


module.exports = {
    readDirRecurseSync,
    toListString,
    deleteFilesRecurse,
    createRandomFiles
}
