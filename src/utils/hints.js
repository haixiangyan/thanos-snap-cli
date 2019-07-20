const chalk = require('chalk')

function showHints() {
    console.log('Usage: thanos <Your path>\n')
    console.log(chalk.yellow(`If <Your path> is not specified, then it will create a /test folder in current directory and thanos that folder. 
Don't worry about your files are somehow thanos :)`))
}

module.exports = {
    showHints
}