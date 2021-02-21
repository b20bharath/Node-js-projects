const name = require("./sample.js")
const validator = require('validator')
const chalk = require('chalk')


console.log(name)
console.log(chalk.green('Hello!') + chalk.yellow("Sai") + chalk.red("Bharath"))         
console.log(validator.isEmail('b20bharath@gmail.com'))