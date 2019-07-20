const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

function readDirRecurseSync(targetPath, filesContainer) {
    // Get all files
    const files = fs.readdirSync(targetPath)

    files.forEach(file => {
        // Is file ?
        if (fs.statSync(path.resolve(targetPath, file)).isFile()) {
            filesContainer.push(path.resolve(targetPath, file))
        }
        else {
            readDirRecurseSync(path.resolve(targetPath, file), filesContainer)
        }
    })
}

function toListString(list) {
    console.log('jjjj ' + list.length)
    return '[\n' + list.map(item => `"${chalk.green(item)}"\n`).join('') + ']'
}

function deleteFilesRecurse(targetPath, names) {
    // Get all files
    const files = fs.readdirSync(targetPath)

    files.forEach(file => {
        // Is file ?
        if (fs.statSync(path.resolve(targetPath, file)).isFile()) {
            if (names.indexOf(path.resolve(targetPath, file)) > -1) {
                fs.unlinkSync(path.resolve(targetPath, file))
                console.log(chalk.red('✨ [DELETED]: ' + path.resolve(targetPath, file)))
            }
        }
        else {
            deleteFilesRecurse(path.resolve(targetPath, file), names)
        }
    })
}

function removeEmptyFolder(targetPath) {
    // Get all files
    const files = fs.readdirSync(targetPath)

    files.forEach(file => {
        // Is file ?
        if (fs.statSync(path.resolve(targetPath, file)).isDirectory()) {
            if (fs.readdirSync(path.resolve(targetPath, file)).length === 0) {
                // fs.unlinkSync(path.resolve(targetPath, file))
                console.log('✨ [REMOVED]: ' + path.resolve(targetPath, file))
            }
            else {
                removeEmptyFolder(path.resolve(targetPath, file))
            }
        }
    })
}

function createRandomFiles() {
    const mockFolder = path.resolve(process.cwd(), './mock')
    if (!fs.existsSync(mockFolder)){
        fs.mkdirSync(mockFolder);
    }

    // Current folder
    fs.writeFileSync(path.resolve(mockFolder, 'a.js'))
    fs.writeFileSync(path.resolve(mockFolder, 'b.js'))
    fs.writeFileSync(path.resolve(mockFolder, 'c.js'))
    fs.writeFileSync(path.resolve(mockFolder, 'd.js'))

    // Sub folder
    if (!fs.existsSync(path.resolve(mockFolder, 'aFolder'))){
        fs.mkdirSync(path.resolve(mockFolder, 'aFolder'));
    }
    fs.writeFileSync(path.resolve(mockFolder, 'aFolder', 'e.js'))
    fs.writeFileSync(path.resolve(mockFolder, 'aFolder', 'f.js'))

    if (!fs.existsSync(path.resolve(mockFolder, 'bFolder'))){
        fs.mkdirSync(path.resolve(mockFolder, 'bFolder'));
    }
    fs.writeFileSync(path.resolve(mockFolder, 'bFolder', 'g.js'))
    fs.writeFileSync(path.resolve(mockFolder, 'bFolder', 'h.js'))

    console.log(chalk.green('✨ [CREATED] mock files in ' + mockFolder))
}


module.exports = {
    readDirRecurseSync,
    toListString,
    deleteFilesRecurse,
    removeEmptyFolder,
    createRandomFiles
}
