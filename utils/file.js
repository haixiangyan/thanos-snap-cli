const fs = require('fs')
const path = require('path')

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

module.exports = {
    readDirRecurseSync
}
